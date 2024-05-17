import{test,expect} from "@playwright/test";
import path from "path";

test("Test File Upload",async({page})=>{
   await page.goto("https://leafground.com/file.xhtml");
   const card = page.locator(".card").filter({hasText:"Basic Upload"});
   await card.locator("input[type='file']").setInputFiles([path.join(__dirname,'images.jpeg')]);
   // await page.waitForTimeout(2000);
   await expect(card.locator(".ui-fileupload-filename")).toContainText("images.jpeg");
})
test.only("Scenario 2 using event Handler",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/upload");
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#drag-drop-upload").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles([path.join(__dirname,'images.jpeg')]);
  await expect(page.locator('#drag-drop-upload')).toHaveClass("dz-success-mark dz-clickable dz-started");
  await page.waitForTimeout(5000);

})