import {test, expect} from '@playwright/test'

test('Mouse Hoover', async function ({page}) {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByPlaceholder('Enter Email').fill('admin@email.com');
    await page.getByPlaceholder('Enter Password').fill('admin@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);

    await page.locator("//div[@class='nav-menu-item-manage']").hover();  
    await page.locator("//a[normalize-space()='Manage Courses']").click();
    await page.waitForTimeout(3000);
    //await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/course/manage');
    let locator = page.locator(".title")
    await expect(locator).toHaveText('Manage Courses');
});