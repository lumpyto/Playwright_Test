import {test, expect} from '@playwright/test'
import testdata from '../testdata.json';
import { describe } from 'node:test';

test.skip('Login test', async function({page}){

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill(testdata.admin.username, {delay:200});
    await page.locator("input[name='password']").fill(testdata.admin.password, {delay:200});
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);

    await page.locator(".oxd-userdropdown-img").click();
    await page.getByText('Logout', {delay:200}).click();
    await expect(page).toHaveURL(/login/);

});

test.describe.skip("Data Driven Login Test", function () {

    let users = [
        testdata.user1,
        //testdata.user2,
        //testdata.user3
    ];

    for(const data of users)
        {

            test(`Login with ${data.username}`, async ({page}) => {

                await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

                await page.getByPlaceholder("Username").fill(data.username, {delay:200});
                await page.locator("input[name='password']").fill(data.password, {delay:200});
                await page.locator("//button[@type='submit']").click();
                await expect(page).toHaveURL(/dashboard/);

                await page.locator(".oxd-userdropdown-img").click();
                await page.getByText('Logout', {delay:200}).click();
                await expect(page).toHaveURL(/login/);

            });
        }
});