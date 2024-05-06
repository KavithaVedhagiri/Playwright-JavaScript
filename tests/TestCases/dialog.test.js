import {test} from "@playwright/test"

test('Handling Alerts',async({page})=>{
    page.on ('dialog',async(alert)=>{
        await alert.accept();
    })
       
    await page.goto("https://leafground.com/alert.xhtml");
    await page.locator("text = Show").first().click();
    await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/parent::div/child::button/child::span)[2]").click()
    await page.locator("(//h5[text()=' Alert (Confirm Dialog)']/parent::div/child::button/child::span)[2]").click()
})

// test.only('Handling Alerts1',async({page})=>{
//       page.on('dialog',async(alert)=>{
//         alert.dismiss();

//       })

//       await page.goto("https://leafground.com/alert.xhtml");
//       // await page.locator("//h5[text() = 'Sweet Alert (Confirmation)']/parent::div/child::button/child::span[2]").click()
//       const cardLocator = page.locator(".card").filter({hasText :"Alert (Confirm Dialog)"})
//       await cardLocator.locator("button").filter({hasText:"Show"}).click();
// })
test.only("Test case to handle dialogs", async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");

    // page.on('dialog', async dialog =>{
    //     const text = dialog.message();
    //     console.log(`The text present in the dialog is ${text}`);
    //     const typeOfAlert = dialog.type();
    //     console.log(`Dialog type: ${typeOfAlert}`);
    //     await dialog.accept();
    // })

    
    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.accept();

    })
    await page.locator("text = Show").first().click();
    await page.waitForTimeout(2000);
    
    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.accept();

    })
   
    const cardLocator = page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);

    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.dismiss();

    })
        const cardLocator1 = page.locator(".card").filter({hasText:"Sweet Alert (Simple Dialog)"});
    await cardLocator1.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
    
})