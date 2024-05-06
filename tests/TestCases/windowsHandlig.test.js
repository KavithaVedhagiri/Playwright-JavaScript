import {test} from "@playwright/test"

test('Handling Windows',async({page,context})=>{

    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent("page");
    
    


});