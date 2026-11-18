import { test, expect } from '@playwright/test';

test("Page navigation and information methods", async ({ page }) => {

  const response = await page.goto("https://playwright.dev/", {
    waitUntil: "load",
    timeout: 30000
  });

  console.log("Status Code: " + response?.status());

  const title = await page.title();
  console.log("Title: " + title);

  const url = page.url();
  console.log("Current URL: " + url);

  const html = await page.content();
  console.log("HTML Length: " + html.length);

  const viewport = page.viewportSize();
  console.log("Viewport Width: " + viewport?.width);
  console.log("Viewport Height: " + viewport?.height);

  await page.reload();

  await expect(page).toHaveTitle(/Playwright/);
});
