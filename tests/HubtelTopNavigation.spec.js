const { test, expect } = require('@playwright/test');

test('The navigation links at the top are all working', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'News' })).toBeVisible();
  await page.getByRole('link', { name: 'News' }).click();
  await expect(page.getByRole('heading', { name: 'News' })).toBeVisible();

  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'Press Releases' })).toBeVisible();
  await page.getByRole('link', { name: 'Press Releases' }).click();
  await expect(page.getByRole('heading', { name: 'Press Releases' })).toBeVisible();

  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'Customer Stories' })).toBeVisible();
  await page.getByRole('link', { name: 'Customer Stories' }).click();
  await expect(page.getByRole('heading', { name: 'Customer Stories' })).toBeVisible();

  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'Product Updates' })).toBeVisible();
  await page.getByRole('link', { name: 'Product Updates' }).click();
  await expect(page.getByRole('heading', { name: 'Product Updates' })).toBeVisible();

  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'Guides' })).toBeVisible();
  await page.getByRole('link', { name: 'Guides' }).click();
  await expect(page.getByRole('heading', { name: 'Guides' })).toBeVisible();

  await page.goto('https://blog.hubtel.com/');
  await expect(page.getByRole('link', { name: 'Inside Hubtel' })).toBeVisible();
  await page.getByRole('link', { name: 'Inside Hubtel' }).click();
  await expect(page.getByRole('heading', { name: 'Inside Hubtel' })).toBeVisible();
});
