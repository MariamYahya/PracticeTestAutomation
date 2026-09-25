import {test , expect} from "@playwright/test";
import {Login} from "../pages/loginpage";
import {LoggedIn} from "../pages/loggedinpage";
import jsonData from "../testData/loginData.json" with {type : "json"};

let loginpage;

test.beforeEach("run this before each test", async({page}) =>{
    loginpage = new Login(page);
    await loginpage.open();
    
})
 
test("Positive Login test", async({page}) =>{
    
    await loginpage.login(jsonData.validData.username, jsonData.validData.password);
    const loggedin_page = new LoggedIn(page);
    await loggedin_page.open();
    await loggedin_page.verifyvalidlogin();
});

test("Negative username test", async({page}) =>{
    await loginpage.login(jsonData.invalidData.incorrectusername, jsonData.validData.password);
    await loginpage.verifyInvalidusername();
});

test("Negative password test", async({page}) =>{
    await await loginpage.login(jsonData.validData.username, jsonData.invalidData.incorrectpassword);
    await loginpage.verifyInvalidpassword();
});