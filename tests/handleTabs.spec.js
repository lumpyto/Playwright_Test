import {test, expect} from '@playwright/test'

test('Handle different Tabs', async ({browser}) =>{

    let context = await browser.newContext()

    let page = await context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    let [newPage] = await Promise.all
    (
        [
            context.waitForEvent("page"),
            page.locator("(//a[contains(@href, 'facebook')])[1]").click()
        ]
       
    )
    await newPage.getByRole('button', { name: 'Allow all cookies' }).click({ timeout: 3000 }).catch(() => {});
    await newPage.waitForLoadState("networkidle")
    await newPage.getByLabel('Email or phone number').fill('Lyubo', { force: true });
    await newPage.getByPlaceholder('Password').fill('Ivan', { force: true });
    await newPage.waitForTimeout(1000);
    await newPage.close();
    
    await page.getByPlaceholder('Enter Email').fill('Lyubo Petrov');
    await page.waitForTimeout(1000);
});