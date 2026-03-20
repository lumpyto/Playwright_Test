import {test, expect} from '@playwright/test'

test('Verify Google title', async function({page}){

   await page.goto('https://www.google.com/');
   let url=await page.url()
   let title=await page.title()

    expect(url).toBe('https://www.google.com/');
    console.log('The title of the page is '+url);

    expect(title).toBe('Google');

})