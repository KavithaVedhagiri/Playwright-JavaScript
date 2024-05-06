import {chromium, test} from "@playwright/test"
test('LaunchBrowser',async()=>{
const browser = await chromium.launch()
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");
console.log(page.url());

}); 