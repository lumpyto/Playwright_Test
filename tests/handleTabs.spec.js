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
    const emailField = newPage.getByLabel('Email or phone number');
    await emailField.waitFor({ state: 'visible', timeout: 10000 });
    await emailField.focus();
    await emailField.fill('Lyubo');

    // await newPage.waitFor({ state: 'visible', timeout: 10000 });
    // await newPage.getByLabel('Email or phone number').focus();
    // await newPage.getByLabel('Email or phone number').fill('Lyubo');
    await newPage.getByPlaceholder('Password').fill('Ivan', { force: true });
    await newPage.waitForTimeout(1000);
    await newPage.close();
    
    await page.getByPlaceholder('Enter Email').fill('Lyubo Petrov');
    await page.waitForTimeout(1000);
});