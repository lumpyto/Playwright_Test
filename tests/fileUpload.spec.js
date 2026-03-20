import {test, expect} from '@playwright/test'

test("File Upload", async function ({page}) {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('./uploads/math_comp.xlsx');  // Here we have created uploads folder and use it!!!!
    await page.waitForTimeout(1000);
    await page.locator('#file-submit').click();
   
    // Here we catch the text using the h3 locator!!!
    expect(await page.locator("//h3")).toHaveText('File Uploaded!');
    
});