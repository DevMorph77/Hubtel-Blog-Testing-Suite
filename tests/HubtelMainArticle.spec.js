const { test, expect } = require('@playwright/test');

test('Check main news article is present', async ({ page }) => {
  // Set a higher timeout for this test
  test.setTimeout(60000); // 60 seconds

  // Navigate to the Hubtel blog page and wait for network to be idle
  await page.goto('https://blog.hubtel.com/', { waitUntil: 'networkidle' });

  // Locate the div containing the main news article
  const mainArticle = page.locator('div.featured-blog-container');

  // Check if the main article div is visible
  await expect(mainArticle).toBeVisible();


});
