import { test, expect } from "@playwright/test";

// These tests mock app/api/contact/route.ts at the network layer so no
// SMTP call ever happens; the route's own behavior (validation, rate
// limiting, honeypot, nodemailer wiring) is covered by
// app/api/contact/route.test.ts under vitest. This file is about the
// browser-side contract: does ContactForm send the right payload and
// render the right UI for each response the API can return.

test("submitting the contact form shows a success message", async ({ page }) => {
  let requestBody: unknown;

  await page.route("**/api/contact", async (route) => {
    requestBody = route.request().postDataJSON();
    await route.fulfill({ status: 200, json: { ok: true } });
  });

  await page.goto("/contact");

  await page.getByLabel("Name").fill("Jane Doe");
  await page.getByLabel("Email").fill("jane@example.com");
  await page.getByLabel("Message").fill("Hello, I'd like to talk about a project.");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByText(/your message is on its way/i)).toBeVisible();

  expect(requestBody).toMatchObject({
    name: "Jane Doe",
    email: "jane@example.com",
    message: "Hello, I'd like to talk about a project.",
    company: "",
  });
});

test("shows the server's error message when the API rejects the submission", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 429,
      json: { error: "Too many requests. Please try again shortly." },
    });
  });

  await page.goto("/contact");

  await page.getByLabel("Name").fill("Jane Doe");
  await page.getByLabel("Email").fill("jane@example.com");
  await page.getByLabel("Message").fill("Hello there");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByText("Too many requests. Please try again shortly.")).toBeVisible();
  // Form stays on screen so the user can retry.
  await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();
});

test("honeypot field is present but hidden from real users", async ({ page }) => {
  await page.goto("/contact");

  const honeypot = page.locator('input[name="company"]');
  await expect(honeypot).toBeHidden();
  await expect(honeypot).toHaveValue("");
});
