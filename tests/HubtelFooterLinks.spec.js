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
