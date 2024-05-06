import{expect, test} from"@playwright/test"

test('Creating a Lead',async({page})=>{

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
page.waitForTimeout(1000)

})