import {test, expect} from '@playwright/test'

test('Verify Error Message', async function({page}){

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   let username="Admian"
   let password="admina123"

   await page.getByPlaceholder('Username').fill(username);
   await page.getByPlaceholder("password").fill(password);
   await page.locator('button:has-text("Login")').click();
   await page.waitForTimeout(1000);
   let errorMessage=await page.locator('p:has-text("Invalid credentials")').textContent('Invalid credentials');

   console.log(`The error message is ${errorMessage}`);

   expect(errorMessage).toEqual("Invalid credentials");

   //expect((errorMessage).includes("Invalid")).toBeTruthy();
   //expect(errorMessage==="Invalid credentials").toBeTruthy();
   
})