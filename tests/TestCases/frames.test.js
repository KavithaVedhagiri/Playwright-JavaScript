import {test} from "@playwright/test"
test(`Test to get the frame count`, async({page})=>{
    await page.goto("https://www.oneindia.com/");
    await page.waitForLoadState('load');
    const frameCount = page.frames().length;
    await page.waitForTimeout(2000);
    console.log(frameCount);
    await page.waitForTimeout(2000);
})

test('Test case to handle iframes using frame object ',async({page})=>{
    // await page.goto("https://leafground.com/alert.xhtml");
    // await page.goto("https://leafground.com/frame.xhtml");
    // const frameCount = page.frames().length;
    // console.log(frameCount);

    const frameSelect = page.frame({url:'https://leafground.com/default.xhtml'});
    await page.waitForTimeout(1000);
    await frameSelect?.click('button#Click');
})
test.only(`Test to handle frames using frameLocator`, async({page})=>{
   await page.goto("https://leafground.com/frame.xhtml");
//    const frame = page.frameLocator("iframe").first();
//    await frame.locator("#Click").click();

   const cardLocator =  page.locator(".card").filter({hasText : "Click Me (Inside Nested frame)"});
   const frame = cardLocator.frameLocator('iframe');
   await frame.frameLocator('iframe').locator("text = Click Me").click();
})