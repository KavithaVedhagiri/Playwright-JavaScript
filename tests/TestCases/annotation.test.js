const {test,expect} = require('@playwright/test');

test('Annotations in Playwright',async({page})=>{

    console.log('Assertions in playwright test is running...!')

    await page.goto("https://www.google.com/search?q=playwright+by+testers+talk");
     // assert url
    await expect(page).toHaveURL("https://www.google.com/search?q=playwright+by+testers+talk");
    //assert title
    await expect(page).toHaveTitle('playwright by testers talk - Google Search');
    //assert text
    await expect(page.getByPlaceholder("Search")).toHaveText('playwright by testers talk');
})