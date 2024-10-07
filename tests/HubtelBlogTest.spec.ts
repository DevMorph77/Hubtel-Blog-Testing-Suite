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
            page.waitForNavigation(), 
            page.goto(link) 
        ]);
  
        expect.soft(response.ok()).toBeTruthy(); 
        await page.goBack(); 
    }
  });
  
  
  test('Check main news article is present', async ({ page }) => {
   
    test.setTimeout(60000);
  
   
    await page.goto('https://blog.hubtel.com/', { waitUntil: 'networkidle' });
  
   
    const mainArticle = page.locator('div.featured-blog-container');
  
    
    await expect.soft(mainArticle).toBeVisible();
  
  
  });
  
  
  
  test('Test Press Releases articles have image, title, date, and reading duration', async ({ page }) => {
    test.setTimeout(60000);
  
  await page.goto('https://blog.hubtel.com/category/press-releases/');
  
  const pressReleases = await page.$$('.press-release-item');
  
  for (const release of pressReleases) {
   
    const image = await release.$('img');
    expect.soft(image).not.toBeNull(); 
  
    
    const title = await release.$('.article-title'); 
    expect.soft(title).not.toBeNull(); 
    const titleText = await title.innerText();
    expect.soft(titleText.length).toBeGreaterThan(0); 
  
  
    const date = await release.$('.article-date'); 
    expect.soft(date).not.toBeNull(); 
    const dateText = await date.innerText();
    expect.soft(dateText.length).toBeGreaterThan(0);
    const readingDuration = await release.$('.reading-duration'); 
    expect.soft(readingDuration).not.toBeNull(); 
    const durationText = await readingDuration.innerText();
    expect.soft(durationText.length).toBeGreaterThan(0); 
  }
  });
  
  

    test('The navigation links at the top are all working', async ({ page }) => {
  
      test.setTimeout(60000); 
      await page.goto('https://blog.hubtel.com/');
      await expect.soft(page.getByRole('link', { name: 'News' })).toBeVisible();
      await page.getByRole('link', { name: 'News' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'News' })).toBeVisible();
      
      //await page.goto('https://blog.hubtel.com/');
      await expect.soft(page.getByRole('link', { name: 'Press Releases' })).toBeVisible();
      await page.getByRole('link', { name: 'Press Releases' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'Press Releases' })).toBeVisible();
      
      //await page.goto('https://blog.hubtel.com/');
      await expect.soft(page.getByRole('link', { name: 'Customer Stories' })).toBeVisible();
      await page.getByRole('link', { name: 'Customer Stories' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'Customer Stories' })).toBeVisible();
      
      //await page.goto('https://blog.hubtel.com/' , {timeout:6000});
      await expect.soft(page.getByRole('link', { name: 'Product Updates' })).toBeVisible();
      await page.getByRole('link', { name: 'Product Updates' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'Product Updates' })).toBeVisible();
      
      //await page.goto('https://blog.hubtel.com/');
      await expect.soft(page.getByRole('link', { name: 'Guides' })).toBeVisible();
      await page.getByRole('link', { name: 'Guides' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'Guides' })).toBeVisible();
      
      //await page.goto('https://blog.hubtel.com/');
      await expect.soft(page.getByRole('link', { name: 'Inside Hubtel' })).toBeVisible();
      await page.getByRole('link', { name: 'Inside Hubtel' }).click();
      await test.step("Waiting for page to load", async () => {
        await page.waitForTimeout(6000);
      });
      await expect.soft(page.getByRole('heading', { name: 'Inside Hubtel' })).toBeVisible();
      });


  
  







  