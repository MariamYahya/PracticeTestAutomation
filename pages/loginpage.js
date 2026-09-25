/**
 * @param {import('playwright').Page} page
 */
import { expect } from "@playwright/test";

class Login{

    login_page_url = "https://practicetestautomation.com/practice-test-login/";
    incorrect_username_msg = "Your username is invalid!";
    incorrect_password_msg = "Your password is invalid!";
    
    constructor(page){
        this.page = page;
        this.username_locator = page.locator("//*[@id='username']");
        this.password_locator = page.locator("//*[@id='password']");
        this.submit_btn = page.locator("//*[@id='submit']");
        this.error_msg_loc = page.locator("//*[@id='error']");
    }

    async open(){
        await this.page.goto(this.login_page_url);
    }
   
    async login(username, password){
       await this.username_locator.fill(username);
       await this.password_locator.fill(password);
       await this.submit_btn.click();
    }

    async verifyInvalidusername(){
        await expect(this.error_msg_loc).toBeVisible();
        await expect(this.error_msg_loc).toContainText(this.incorrect_username_msg);
    }

     async verifyInvalidpassword(){
        await expect(this.error_msg_loc).toBeVisible();
        await expect(this.error_msg_loc).toContainText(this.incorrect_password_msg);
    }

}
module.exports = { Login };