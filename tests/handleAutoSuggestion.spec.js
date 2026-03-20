import {test, expect} from '@playwright/test'

test('Handel Auto Suggestion using keyboard', async function ({page}) {
    await page.goto('https://www.google.com/');
    await page.getByRole('button', { name: /reject|отхвърляне/i }).click();
    await page.locator("textarea[name='q']").fill('Lyubomir Petrov');
    await page.waitForSelector("div[role='presentation']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
});

test('Verify Application Title using Loop', async function ({page}) {
    await page.goto('https://www.google.com/');
    await page.getByRole('button', { name: /reject|отхвърляне/i }).click();
    await page.locator("textarea[name='q']").fill('Lyubomir Petrov');
    await page.waitForSelector("div[role='presentation']");

    // This will find all the matching elements within the page. We get an array of elements. 
    // I will find all the elements and I will get the text. I will read it one by one and the moment I found 'адвокат' I will click on it.
    // Pick the first element, capture the text and check the condition. If it contains what we need -> click on it. 
    let element = await page.$$("li[role='presentation']");
    for(let i=0; i<element.length; i++)
    {
        let text = await element[i].textContent()
        if(text.includes('адвокат'))
        {
            await element[i].click();
            break
        }
    }
});