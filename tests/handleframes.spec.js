import {test, expect} from '@playwright/test'

test('Handle iFrames', async ({page}) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    await page.frameLocator('[name="classFrame"]').getByRole('button', { name: 'Decline all' }).click({ timeout: 3000 }).catch(() => {});
    await page.frameLocator('[name="packageListFrame"]').getByRole('link', { name: 'java.applet' }).click();
    let name = await page.frameLocator('[name="packageFrame"]').getByRole('link', { name: 'java.applet' })
    await page.waitForTimeout(500);
    await expect(name).toBeTruthy();
});