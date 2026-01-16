import { test, expect } from "@playwright/test";

test.describe("AutomationTestingCard", () => {
  test("carousel arrows are keyboard operable and meet hit area", async ({ page }) => {
    await page.goto("/");

    const card = page.getByTestId("automation-testing-card");
    await card.scrollIntoViewIfNeeded();

    const next = page.getByTestId("technology-carousel-next");
    const prev = page.getByTestId("technology-carousel-prev");

    const nextBox = await next.boundingBox();
    const prevBox = await prev.boundingBox();

    expect(nextBox?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(nextBox?.height ?? 0).toBeGreaterThanOrEqual(44);
    expect(prevBox?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(prevBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    await next.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { name: "Manual & Integration Testing" })).toBeVisible();

    await prev.focus();
    await page.keyboard.press(" ");
    await expect(page.getByRole("heading", { name: "Automation Testing" })).toBeVisible();
  });

  test("visual baseline at md viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const card = page.getByTestId("automation-testing-card");
    await card.scrollIntoViewIfNeeded();

    await expect(card).toHaveScreenshot("automation-testing-card-md.png");
  });

  test("visual baseline at mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const card = page.getByTestId("automation-testing-card");
    await card.scrollIntoViewIfNeeded();

    await expect(card).toHaveScreenshot("automation-testing-card-mobile.png");
  });
});
