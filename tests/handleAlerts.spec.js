import {test, expect} from '@playwright/test'

// Different type alerts. alert (click OK), confirm (click OK or NO), prompt (enter some text)
test('Handle Alerts - JS Alert', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // on is event listener - catches the alert, check the type, check the message and accept it.
    await page.on('dialog', async (d) => {
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain('I am a JS Alert')
        await page.waitForTimeout(1000);
        await d.accept()
    });
    await page.locator("//button[text()='Click for JS Alert']").click();

});

test('Handle Alerts - JS Confirm', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // on is event listener - catches the alert, check the type, check the message and accept it.
    // you use the listener before you click!!!
    await page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain('I am a JS Confirm')
        Math.random() < 0.5 ? await dialogWindow.accept() : await dialogWindow.dismiss();
        
    });
    await page.locator("//button[text()='Click for JS Confirm']").click();

    // Check if the text content of the result is Ok or Cancel and print it in the console.
    let resultText = await page.locator('#result').textContent();

        if (resultText.includes('Ok')) {
            console.log('Ok was clicked');
        } 
        else if (resultText.includes('Cancel')) {
            console.log('Cancel was clicked');
        }
});

test('Handle Alerts - JS Prompt', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // on is event listener - catches the alert, check the type, check the message and accept it.
    // you use the listener before you click!!!
    await page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain('I am a JS prompt')
        await dialogWindow.accept("Lyubo Ivanov")
    });
    
    await page.locator("//button[text()='Click for JS Prompt']").click();
    let text = await page.locator('#result').innerText();
    let enteredValue = text.replace('You entered: ', '');

    console.log(enteredValue);

});