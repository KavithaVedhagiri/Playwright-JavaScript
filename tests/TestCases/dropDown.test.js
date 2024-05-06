import{expect, test} from "@playwright/test";

test('Dropdown List',async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");  
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.fill("#password","crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.getByText('CRM/SFA').click();
    // await page.getByText('Create Lead').click();
    await page.getByRole('link',{name :'Create Lead',exact:true}).click();
    await page.waitForTimeout(5000);
    await page.locator("[id = 'createLeadForm_companyName']").fill("TestLeaf");
   // await page.locator("//input[@id = 'createLeadForm_companyName']").fill("TestLeaf");
    await page.locator("[id='createLeadForm_firstName']").fill("Kavitha");
    await page.locator("#createLeadForm_lastName").fill("Vedhagiri")
    //dropdown Selector
    //await page.selectOption("#createLeadForm_generalCountryGeoId",'American Samoa');
    // await page.selectOption("#createLeadForm_currencyUomId",{label:'DOP - Dominican Peso'});
    // const option = await page.$$('#createLeadForm_currencyUomId');
    // console.log("Option Length" + option.length);
    // const content = await page.locator('#createLeadForm_currencyUomId').textContent();
    // await expect(content.includes("XCD - East Carribean Dollar")).toBeTruthy();
    
    // await page.selectOption("#createLeadForm_generalCountryGeoId",[
    //     {label : 'Afghanistan'},
    //     {value : 'ASM'},
    //     {index : 13}
    // ])
    // await page.selectOption("#createLeadForm_currencyUomId",[
    //     {label:'AOK - Angolan Kwanza'},
    //     {value: 'CAD'},
    //     {index : 13}
    // ])
    // const dropdowns = await page.$$('#createLeadForm_currencyUomId option');

    // for(const dropdown of dropdowns){
    //       console.log(await dropdown.textContent());
    // }
    // const dropdown = page.locator("#createLeadForm_currencyUomId option");
    // const ddCount = await dropdown.count();

    // for (let index = 0; index < ddCount; index++) {
      
    //     console.log(await dropdown.nth(index).innerText());
            
    // }
    // const dropdown = page.locator("#createLeadForm_currencyUomId option");
    // const ddCount = await dropdown.count();

    // for (let index = 0; index < ddCount; index++) {
      
    //     console.log(await dropdown.nth(index).innerText());
            
    // }
    //Select the dropdown value from State
    await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {value:'SC'});

    //Click Submit
    await page.click(".smallSubmit");
    
    //Verify the status
    const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);

})