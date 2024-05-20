/**
 * CSV - Comma Separated Values
 * plain text file
 * 
 * 1. Simple format
 * 2. Easy to read
 * 3. Flexibility
 * 
 * 
 */

import {test} from "@playwright/test"
import { parse } from "csv/sync";
import  path  from "path";
import fs from "fs";


const record = parse(fs.readFileSync(path.join(__dirname,'loginData.csv')),{
    columns: true,
    skip_empty_lines: true

}) 

for (const data of record) {
    test(`Login Test ${data.test_case}`, async({page})=>{

        await page.goto("https://login.salesforce.com/");
        await page.fill("#username",data.userName);
        await page.fill("#password",data.password);
        await page.click("#Login");
    })
}


