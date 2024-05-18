import{test} from "@playwright/test";
import path from "path";

test("TC001 Scenario to Handle Download File",async({page})=>{
    await page.goto("https://leafground.com/file.xhtml");
    const fileDownloadPromise = page.waitForEvent("download");
    await page.getByRole('button', {name:'Download'}).click();
    const fileDownload = await fileDownloadPromise;
    await fileDownload.saveAs(path.join("download/"+fileDownload.suggestedFilename()));
    const downloadUrl = fileDownload.url();
    console.log(`The file is being downloaded from: ${downloadUrl}`);

})