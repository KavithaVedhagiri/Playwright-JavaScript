import {expect, test} from "@playwright/test"

test('Handling Windows',async({page,context})=>{

    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent("page");
    await page.getByText("Open",{exact:true}).click();
    const window  = await windowPromise;
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(`The url of the new window is ${window.url()}`);
    
    //Interacting with the new window
    await window.getByPlaceholder("E-mail Address").fill("kavitha@gmail.com");
    await window.close();

     //Interact with main window
    await page.click("i[class = 'pi pi-home layout-menuitem-icon']");
    await page.waitForTimeout(5000);
});