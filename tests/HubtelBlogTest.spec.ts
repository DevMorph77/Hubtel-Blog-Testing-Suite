const { test, expect } = require('@playwright/test');

test.describe('Hubtel Testing Suite', () => {

  test('Test footer app download links', async ({ page }) => {
      test.setTimeout(60000); 
      await page.goto('https://blog.hubtel.com/category/press-releases/');

      const downloadLinks = [
          'https://itunes.apple.com/gh/app/hubtel-me/id1276144206?mt=8',
          'https://appgallery.huawei.com/app/C101763075',
      ];

      for (const link of downloadLinks) {
          const [response] = await Promise.all([
              page.waitForNavigation(), 
              page.goto(link) 
          ]);

          expect(response.ok()).toBeTruthy(); 
          await page.goBack(); 
      }
  });

  test('Check main news article is present', async ({ page }) => {
      test.setTimeout(60000);
    
      await page.goto('https://blog.hubtel.com/', { waitUntil: 'networkidle' });
    
      const mainArticle = page.locator('div.featured-blog-container');
      await expect(mainArticle).toBeVisible();
  });

  test('Test Press Releases articles have image, title, date, and reading duration', async ({ page }) => {
      test.setTimeout(60000);
    
      await page.goto('https://blog.hubtel.com/category/press-releases/');
    
      const pressReleases = await page.$$('.press-release-item');
    
      for (const release of pressReleases) {
          const image = await release.$('img');
          expect(image).not.toBeNull(); 
  
          const title = await release.$('.article-title'); 
          expect(title).not.toBeNull(); 
          const titleText = await title.innerText();
          expect(titleText.length).toBeGreaterThan(0); 
  
          const date = await release.$('.article-date'); 
          expect(date).not.toBeNull(); 
          const dateText = await date.innerText();
          expect(dateText.length).toBeGreaterThan(0);
  
          const readingDuration = await release.$('.reading-duration'); 
          expect(readingDuration).not.toBeNull(); 
          const durationText = await readingDuration.innerText();
          expect(durationText.length).toBeGreaterThan(0); 
      }
  });

  test('The navigation links at the top are all working', async ({ page }) => {
    test.setTimeout(60000); 

    const navLinks = [
      { name: 'News', heading: 'News' },
      { name: 'Press Releases', heading: 'Press Releases' },
      { name: 'Customer Stories', heading: 'Customer Stories' },
      { name: 'Product Updates', heading: 'Product Updates' },
      { name: 'Guides', heading: 'Guides' },
      { name: 'Inside Hubtel', heading: 'Inside Hubtel' }
    ];

    for (const link of navLinks) {
      await test.step(`Checking ${link.name} link`, async () => {
        await expect(page.getByRole('link', { name: link.name })).toBeVisible();
        await page.getByRole('link', { name: link.name }).click();
        
        await test.step("Waiting for page to load", async () => {
          await page.waitForTimeout(2000); 
        });
        
        await page.waitForNavigation({ waitUntil: 'networkidle' });
        await expect(page.getByRole('heading', { name: link.heading })).toBeVisible();
        await page.goBack();
      });
    }
  });

});
