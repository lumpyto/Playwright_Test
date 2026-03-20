import { expect } from "@playwright/test";
import testdata from '../../testdata.json';

export class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.header = "//h2[text() = 'Sign In']"
        this.username = "//input[@placeholder='Enter Email']"
        this.password = "//input[@placeholder='Enter Password']"
        this.signInButton = "//button[text()='Sign in']"
    }

    async logintoApplication()
    {
        await this.page.fill(this.username, testdata.learnAutoUser.username)
        await this.page.fill(this.password, testdata.learnAutoUser.password)
        await this.page.click(this.signInButton)
    }

    async verifySignInOption()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }

}