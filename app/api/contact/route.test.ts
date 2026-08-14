import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { __resetRateLimiter } from "@/lib/rate-limit";

const sendMail = vi.fn().mockResolvedValue({ messageId: "test" });
const createTransport = vi.fn(() => ({ sendMail }));

vi.mock("nodemailer", () => ({
  default: { createTransport: () => createTransport() },
}));

const { POST } = await import("./route");

const ENV_KEYS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "CONTACT_TO_EMAIL"] as const;

function setSmtpEnv(overrides: Partial<Record<(typeof ENV_KEYS)[number], string>> = {}) {
  process.env.SMTP_HOST = overrides.SMTP_HOST ?? "smtp.porkbun.com";
  process.env.SMTP_PORT = overrides.SMTP_PORT ?? "465";
  process.env.SMTP_USER = overrides.SMTP_USER ?? "hello@campbelldavis.com.au";
  process.env.SMTP_PASSWORD = overrides.SMTP_PASSWORD ?? "supersecret";
  if (overrides.CONTACT_TO_EMAIL) {
    process.env.CONTACT_TO_EMAIL = overrides.CONTACT_TO_EMAIL;
  }
}

function clearSmtpEnv() {
  for (const key of ENV_KEYS) delete process.env[key];
}

function makeRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const validPayload = { name: "Jane Doe", email: "jane@example.com", message: "Hello there" };

describe("POST /api/contact", () => {
  beforeEach(() => {
    __resetRateLimiter();
    setSmtpEnv();
    sendMail.mockClear();
    createTransport.mockClear();
  });

  afterEach(() => {
    clearSmtpEnv();
    delete process.env.CONTACT_TO_EMAIL;
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe("input validation", () => {
    it.each([
      ["name", { email: validPayload.email, message: validPayload.message }],
      ["email", { name: validPayload.name, message: validPayload.message }],
      ["message", { name: validPayload.name, email: validPayload.email }],
    ])("400s when %s is missing", async (_field, body) => {
      const res = await POST(makeRequest(body));
      expect(res.status).toBe(400);
      expect(sendMail).not.toHaveBeenCalled();
    });

    it("400s when all fields are missing", async () => {
      const res = await POST(makeRequest({}));
      expect(res.status).toBe(400);
      expect(sendMail).not.toHaveBeenCalled();
    });

    it.each(["name", "email", "message"])("400s when %s is whitespace-only", async (field) => {
      const res = await POST(makeRequest({ ...validPayload, [field]: "   " }));
      expect(res.status).toBe(400);
      expect(sendMail).not.toHaveBeenCalled();
    });

    it.each(["notanemail", "foo@bar", "foo@bar.", "@bar.com", "foo bar@baz.com"])(
      "400s on invalid email %s",
      async (email) => {
        const res = await POST(makeRequest({ ...validPayload, email }));
        expect(res.status).toBe(400);
        const json = await res.json();
        expect(json.error).toMatch(/valid email/i);
        expect(sendMail).not.toHaveBeenCalled();
      },
    );

    it.each(["a@b.co", "first.last+tag@sub.domain.com"])(
      "accepts valid email %s",
      async (email) => {
        const res = await POST(makeRequest({ ...validPayload, email }));
        expect(res.status).toBe(200);
        expect(sendMail).toHaveBeenCalledOnce();
      },
    );

    it("400s on malformed JSON body", async () => {
      const res = await POST(makeRequest("{not json"));
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.error).toBe("Invalid request.");
      expect(sendMail).not.toHaveBeenCalled();
    });

    it("returns a fake success and sends no mail when the honeypot is filled", async () => {
      const res = await POST(makeRequest({ ...validPayload, company: "I am a bot" }));
      expect(res.status).toBe(200);
      const json = await res.json();
      expect(json).toEqual({ ok: true });
      expect(sendMail).not.toHaveBeenCalled();
    });

    it("500s when SMTP env vars are missing", async () => {
      clearSmtpEnv();
      const res = await POST(makeRequest(validPayload));
      expect(res.status).toBe(500);
      expect(sendMail).not.toHaveBeenCalled();
    });

    it("500s with a generic message when sendMail throws", async () => {
      sendMail.mockRejectedValueOnce(new Error("SMTP connection refused"));
      const res = await POST(makeRequest(validPayload));
      expect(res.status).toBe(500);
      const json = await res.json();
      expect(json.error).not.toMatch(/SMTP connection refused/);
    });

    it("sends mail with correct fields on the happy path, defaulting `to` to SMTP_USER", async () => {
      const res = await POST(makeRequest(validPayload));
      expect(res.status).toBe(200);
      expect(sendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          from: "hello@campbelldavis.com.au",
          to: "hello@campbelldavis.com.au",
          replyTo: validPayload.email,
          subject: expect.stringContaining(validPayload.name),
          text: expect.stringContaining(validPayload.message),
        }),
      );
    });

    it("routes to CONTACT_TO_EMAIL when set", async () => {
      setSmtpEnv({ CONTACT_TO_EMAIL: "hello+contact@campbelldavis.com.au" });
      await POST(makeRequest(validPayload));
      expect(sendMail).toHaveBeenCalledWith(
        expect.objectContaining({ to: "hello+contact@campbelldavis.com.au" }),
      );
    });
  });

  describe("rate limiting", () => {
    it("allows up to the limit then 429s the next request from the same IP", async () => {
      const headers = { "x-forwarded-for": "203.0.113.5" };

      for (let i = 0; i < 5; i++) {
        const res = await POST(makeRequest(validPayload, headers));
        expect(res.status).toBe(200);
      }

      const blocked = await POST(makeRequest(validPayload, headers));
      expect(blocked.status).toBe(429);
      expect(blocked.headers.get("Retry-After")).toBeTruthy();
      expect(sendMail).toHaveBeenCalledTimes(5);
    });

    it("tracks separate IPs independently", async () => {
      const ipA = { "x-forwarded-for": "203.0.113.10" };
      const ipB = { "x-forwarded-for": "203.0.113.20" };

      for (let i = 0; i < 5; i++) {
        expect((await POST(makeRequest(validPayload, ipA))).status).toBe(200);
      }
      expect((await POST(makeRequest(validPayload, ipA))).status).toBe(429);

      // A different IP is unaffected by IP A's limit.
      expect((await POST(makeRequest(validPayload, ipB))).status).toBe(200);
    });

    it("resets the window after time passes", async () => {
      vi.useFakeTimers();
      const headers = { "x-forwarded-for": "203.0.113.30" };

      for (let i = 0; i < 5; i++) {
        expect((await POST(makeRequest(validPayload, headers))).status).toBe(200);
      }
      expect((await POST(makeRequest(validPayload, headers))).status).toBe(429);

      vi.advanceTimersByTime(60_001);

      expect((await POST(makeRequest(validPayload, headers))).status).toBe(200);
    });

    it("still counts honeypot-triggered requests against the limit", async () => {
      const headers = { "x-forwarded-for": "203.0.113.40" };
      const botPayload = { ...validPayload, company: "bot" };

      for (let i = 0; i < 5; i++) {
        const res = await POST(makeRequest(botPayload, headers));
        expect(res.status).toBe(200);
      }
      expect(sendMail).not.toHaveBeenCalled();

      const blocked = await POST(makeRequest(botPayload, headers));
      expect(blocked.status).toBe(429);
    });

    it("falls back to a shared key when no IP header is present", async () => {
      for (let i = 0; i < 5; i++) {
        expect((await POST(makeRequest(validPayload))).status).toBe(200);
      }
      expect((await POST(makeRequest(validPayload))).status).toBe(429);
    });
  });
});
