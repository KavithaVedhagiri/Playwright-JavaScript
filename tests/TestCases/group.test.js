const {test,expect} = require('@playwright/test');

test.describe('Smoke Testing',()=>{
    test('TC001',async({page})=>{
        console.log('Assertions in playwright test is running...!')
        await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
        await expect(page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');
        await expect(page).toHaveTitle('playwright by testers talk - Google Search');
        await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();
        await expect(page.locator("[aria-label='Search']").first()).toBeVisible();
        await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();

        //assert disabled empty count
        //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();
        await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();
        await expect(page.locator("[aria-label='Search']")).toHaveCount(2);

        await page.waitForTimeout(5000);
    })

    test('TC002',async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("//input[@id='username']").fill("Demosalesmanager");
        await page.getByLabel('Password').fill('crmsfa');
        await page.locator(".decorativeSubmit").click();
        await page.getByText('CRM/SFA').click();
        //await page.locator("text=CRM/SFA").click();
        await page.locator("text = Create Lead").click();
        await expect(page.locator("[id = 'createLeadForm_companyName']")).toBeEnabled();
        await page.locator("[id = 'createLeadForm_companyName']").fill("TestLeaf");
        await page.locator("[name='firstName']").nth(2).fill("Kavitha");
        await page.locator("#createLeadForm_lastName").fill("Vedhagiri");
        await page.locator(".smallSubmit").click();
        const status = await page.innerText("#viewLead_statusId_sp");
        console.log(`The status of the lead is ${status}`);
        await page.waitForTimeout(5000);

    })
})

test.describe('Sanity Testing',()=>{
    test('TC003',async({page})=>{
        console.log('Assertions in playwright test is running...!')
        await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
        await expect(page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');
        await expect(page).toHaveTitle('playwright by testers talk - Google Search');
        await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();
        await expect(page.locator("[aria-label='Search']").first()).toBeVisible();
        await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();

        //assert disabled empty count
        //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();
        await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();
        await expect(page.locator("[aria-label='Search']")).toHaveCount(2);

        await page.waitForTimeout(5000);
    })

    test('TC004',async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("//input[@id='username']").fill("Demosalesmanager");
        await page.getByLabel('Password').fill('crmsfa');
        await page.locator(".decorativeSubmit").click();
        await page.getByText('CRM/SFA').click();
        //await page.locator("text=CRM/SFA").click();
        await page.locator("text = Create Lead").click();
        await expect(page.locator("[id = 'createLeadForm_companyName']")).toBeEnabled();
        await page.locator("[id = 'createLeadForm_companyName']").fill("TestLeaf");
        await page.locator("[name='firstName']").nth(2).fill("Kavitha");
        await page.locator("#createLeadForm_lastName").fill("Vedhagiri");
        await page.locator(".smallSubmit").click();
        const status = await page.innerText("#viewLead_statusId_sp");
        console.log(`The status of the lead is ${status}`);
        await page.waitForTimeout(5000);

    })
})