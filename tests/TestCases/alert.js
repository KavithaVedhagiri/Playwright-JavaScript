import{test,expect} from "@playwright/test"

test('Handling Dialog',async({page})=>{

    // page.on('dialog',async(alert)=>{
    //    const message = alert.message()
    //    console.log(message);
    // //    alert.accept();
    //    alert.accept("Hi");
    // })
    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.accept();

    })


    
   await page.goto("https://leafground.com/alert.xhtml");
   const cardLocator =  page.locator(".card").filter({hasText:"Alert (Simple Dialog)"});
// await cardLocator.locator('button').filter({hasText:"Show"}).first().click();
   await cardLocator.getByRole('button',{hasText:"Show"}).first().click();
   const cardLocator1 =  page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
   await cardLocator1.getByRole('button',{hasText:"Show"}).first().click();
//    const cardLocator2 =  page.locator(".card").filter({hasText:"Sweet Alert (Simple Dialog)"});
//    await cardLocator2.getByRole('button',{hasText:"Show"}).first().click();
   const cardLocator3 =  page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
   await cardLocator3.getByRole('button',{hasText:"Show"}).first().click();
//    await expect(cardLocator3).toContainText("Hi");

})