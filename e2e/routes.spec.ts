import { test, expect, type Page } from "@playwright/test";

// Every statically-generated page route in the app (app/**/page.tsx),
// including the case study detail page that isn't in the header nav.
const routes = [
  "/",
  "/services",
  "/case-studies",
  "/case-studies/wordpress-integration-review",
  "/about",
  "/contact",
];

function collectPageErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

for (const route of routes) {
  test(`${route} loads with no console errors and one h1`, async ({ page }) => {
    const errors = collectPageErrors(page);

    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

test("robots.txt and sitemap.xml are served", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  for (const route of routes) {
    expect(await sitemap.text()).toContain(route === "/" ? "campbelldavis.com.au" : route);
  }
});

test("header nav links navigate to the expected pages", async ({ page }) => {
  await page.goto("/");

  for (const [label, path] of [
    ["Services", "/services"],
    ["Case Studies", "/case-studies"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ] as const) {
    await page.getByRole("banner").getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(page.locator("h1")).toHaveCount(1);
  }
});
