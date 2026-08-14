import { beforeEach, describe, expect, it } from "vitest";
import {
  __rateLimiterSize,
  __resetRateLimiter,
  checkRateLimit,
  rateLimitKeyFromHeaders,
} from "./rate-limit";

describe("rateLimitKeyFromHeaders", () => {
  it("uses the first IP in x-forwarded-for", () => {
    const headers = new Headers({ "x-forwarded-for": "203.0.113.1, 10.0.0.1" });
    expect(rateLimitKeyFromHeaders(headers)).toBe("203.0.113.1");
  });

  it("falls back to a shared key when the header is absent", () => {
    expect(rateLimitKeyFromHeaders(new Headers())).toBe("unknown");
  });
});

describe("checkRateLimit", () => {
  beforeEach(() => {
    __resetRateLimiter();
  });

  it("does not grow unbounded when many distinct IPs each make one expired request", () => {
    const start = 0;
    for (let i = 0; i < 1000; i++) {
      checkRateLimit(`ip-${i}`, start);
    }
    expect(__rateLimiterSize()).toBe(1000);

    // A request long after the window closes should prune every stale
    // entry, not just the one for the key being checked right now.
    checkRateLimit("ip-new", start + 61_000);
    expect(__rateLimiterSize()).toBe(1);
  });

  it("keeps still-active keys while pruning expired ones", () => {
    checkRateLimit("stale", 0);
    checkRateLimit("active", 30_000);

    checkRateLimit("active", 61_000); // within active's window, past stale's
    expect(__rateLimiterSize()).toBe(1);
  });
});
