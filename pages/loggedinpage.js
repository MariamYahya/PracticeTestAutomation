/**
 * @param {import('playwright').Page} page
 */
import { expect } from "@playwright/test";

class LoggedIn{

    successful_login_url = "https://practicetestautomation.com/logged-in-successfully/";
    loggedin_text = "Logged In Successfully";
    
    constructor(page){
        this.page = page;
        this.loggedin_text_loc = page.locator("#loop-container > div > article > div.post-header > h1");
        this.logout_btn = page.locator("//*[@id='loop-container']/div/article/div[2]/div/div/div/a");
    }

    async open(){
        await this.page.goto(this.successful_login_url);
    }

    async verifyvalidlogin(){
    await expect(this.page).toHaveURL(this.successful_login_url);
    await expect(this.loggedin_text_loc).toContainText(this.loggedin_text);
    await expect(this.logout_btn).toBeVisible();
    }
}
module.exports = {LoggedIn};