import {test, expect} from '@playwright/test'

test('Keyboard Activities', async function ({page}) {
    await page.goto('https://www.google.com/');
    // Scrolls automatically so that button is visible
    await page.getByRole('button', { name: 'Отхвърляне на всички' }).click();

    // This will type your name then click arrow left once, select the family name and delete it !!!
    await page.locator("textarea[name='q']").focus();
    await page.keyboard.type("Lyubomir Petrov!");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.down("Shift");

    for(let i=0; i<'Petrov'.length; i++)    // Petrov.length is similar to i<6 symbols. Here you say the word you want deleted
    {
        await page.keyboard.press('ArrowLeft')
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    
    // await page.locator("textarea[name='q']").fill("Lyubo Petrov");
    // await page.keyboard.press('Control+A');  //'Control+KeyA' and 'Control+A' - is the same
    // await page.keyboard.press('Control+C');
    // await page.keyboard.press('Backspace');
    // await page.keyboard.press('Control+V');


    // //await page.keyboard.press("Enter");
    // await page.waitForTimeout(2000);


});