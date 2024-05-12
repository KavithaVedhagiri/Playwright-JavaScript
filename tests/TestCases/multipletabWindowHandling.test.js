import {test} from "@playwright/test"


test('Handling Multiple Tabs',async({page,context})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const [multiplePage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open Multiple",{exact:true}).click()
        ])
       
       
        const noOfPages = multiplePage.context().pages();
        console.log(`No. of pages opened: ${noOfPages.length}`);

        noOfPages.forEach(nameoftab=>{
            const tabName = nameoftab.url();
            console.log(`The title of the Page ${tabName}`);
        })
        let webPage;
        // const element = await noOfPages[2].bringToFront();
        for (let index = 0; index < noOfPages.length; index++) {
            const title = await noOfPages[index].title(); 
            console.log(`Title of the page is : ${title}`);
            if(title === 'Web Table'){
                
                webPage = noOfPages[index];
            }   
        }
        await webPage.fill("input[placeholder='Search']","Amy Elsner");
        await webPage.waitForTimeout(5000); 
             
})
test.skip('Handlng windoes',async({page,context})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const [newPage]= await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open",{exact:true}).click()
    ])
    await newPage.locator("[placeholder='E-mail Address']").fill("kavitha@gmail.com");
    await page.click("i[class='pi pi-home layout-menuitem-icon']");

})


