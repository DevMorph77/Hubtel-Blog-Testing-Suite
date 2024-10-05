const { test, expect } = require('@playwright/test');

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
