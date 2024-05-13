import { test } from "@playwright/test";

test('Handling Shadow DOM',async({page})=>{
    await page.goto("https://developer.servicenow.com/dev.do#!/");
    await page.click("text = Sign In");
    await page.fill("#email", "mohanapriya1811@gmail.com");
    await page.click("text=Next");
    await page.fill("#password", "Scope@123");
    await page.click("#password_submit_button");
    await page.click("text=Guides");
    await page.click("Developer Program Guides");
})