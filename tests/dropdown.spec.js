import {test, expect} from '@playwright/test'

//test.use({viewport:{width:1500, height:1000}});

test('Select values from dropdown', async function({page}){

   await page.goto('https://freelance-learn-automation.vercel.app/signup');

   //Make a single selection
   // await page.locator("#state").selectOption({label:"Goa"});
   // await page.waitForTimeout(1000);

   // await page.locator("#state").selectOption({value:"Haryana"});
   // await page.waitForTimeout(1000);

   // await page.locator("#state").selectOption({index:4});

   // await page.waitForTimeout(1000);

    
// Second part of the test. This checks that the dropdown contains this value - Uttarakhand
    let value = await page.locator("#state").textContent();
    console.log("All dropdown values" +value);

    await expect(value.includes("Uttarakhand")).toBeTruthy();
   //await expect(value).toEqual("Daman and Doo")



// This will run a loop to check the value from the dropdown exist. 
   let state = await page.$("#state");
   
   let allTheElements = await state.$$("option");

   let ddStatus = false

   for(let i=0; i<allTheElements.length; i++) 
      {
         let element = allTheElements [i]

         let value = await element.textContent()

         if(value.includes("Arunachal Pradesh"))
         {
            ddStatus = true
            break
         }

         console.log("Value from dropdown using for loop "+value);
      }
      await expect(ddStatus).toBeTruthy();

   // This will - Select Multiple Hobbies (from the webpage)
      await page.locator("#hobbies").selectOption(["Playing", "Swimming", "Dancing"]);

      await page.waitForTimeout(3000);
    

});