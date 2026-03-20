const {expect} = require("@playwright/test")

export class HomePage{

    constructor(page)
    {
        this.page = page
        this.manageoption = "//span[text() = 'Manage']"
        this.menu = "//img[@alt='menu']"
        this.signOut = "//button[text() = 'Sign out']"
    }

    async verifyManageOption()
    {
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

    async logoutFromApp()
    {
        await this.page.click(this.menu)
        await this.page.click(this.signOut)
    }
}