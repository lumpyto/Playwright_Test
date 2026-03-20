import { test, expect } from "@playwright/test"
import { LoginPage } from "./loginpage.js";
import { HomePage } from "./homepage.js";

test("Login To Applicatioh Using POM", async({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    let loginPage = new LoginPage(page)
    await loginPage.logintoApplication()

    let homePage = new HomePage(page)
    await homePage.verifyManageOption()
    await homePage.logoutFromApp()

    await loginPage.verifySignInOption()
});