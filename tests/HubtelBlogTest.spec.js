const { test, expect } = require('@playwright/test');

test('Test footer app download links', async ({ page }) => {
    test.setTimeout(60000); 
    await page.goto('https://blog.hubtel.com/category/press-releases/');

    const downloadLinks = [
        'https://itunes.apple.com/gh/app/hubtel-me/id1276144206?mt=8',
        'https://appgallery.huawei.com/app/C101763075',
    ];

    for (const link of downloadLinks) {
        const [response] = await Promise.all([
            page.waitForNavigation(), // Wait for the new page to navigate
            page.goto(link) // Navigate to the link
        ]);

        expect(response.ok()).toBeTruthy(); // Verify the link works
        await page.goBack(); // Go back to the original page to check the next link
    }
});


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



test('Test Press Releases articles have image, title, date, and reading duration', async ({ page }) => {
    test.setTimeout(60000);
  
    // Go to the page where the press releases are listed
  await page.goto('https://blog.hubtel.com/category/press-releases/');

  // Assuming each press release is contained within a div with a class like 'press-release-item'
  const pressReleases = await page.$$('.press-release-item');
  
  // Loop through each press release to check its components
  for (const release of pressReleases) {
    // Check for the image
    const image = await release.$('img');
    expect(image).not.toBeNull(); // Ensure the image exists

    // Check for the title
    const title = await release.$('.article-title'); // Assuming title has a class 'article-title'
    expect(title).not.toBeNull(); // Ensure the title exists
    const titleText = await title.innerText();
    expect(titleText.length).toBeGreaterThan(0); // Ensure title is not empty

    // Check for the date
    const date = await release.$('.article-date'); // Assuming date has a class 'article-date'
    expect(date).not.toBeNull(); // Ensure the date exists
    const dateText = await date.innerText();
    expect(dateText.length).toBeGreaterThan(0); // Ensure date is not empty

    // Check for the reading duration
    const readingDuration = await release.$('.reading-duration'); // Assuming reading duration has a class 'reading-duration'
    expect(readingDuration).not.toBeNull(); // Ensure reading duration exists
    const durationText = await readingDuration.innerText();
    expect(durationText.length).toBeGreaterThan(0); // Ensure duration is not empty
  }
});



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


  