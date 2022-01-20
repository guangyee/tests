import { LoginPage } from "./pageobjects/login.po";
describe('login page for harvester', () => {
    // it('should login the first time', () => {
    //     const login = new LoginPage();
    //     login.firstLogin();
    //     login.validateLogin();
    // });

    it('should login successfully', () => {
        const login = new LoginPage();
        login.login();
        login.validateLogin();
    });
});