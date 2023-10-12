const registerPageObjects = require("../pageobjects/registerPage.object");
const data = require("../data/data.json");
let datestamp = new Date().valueOf();

class RegisterPageActions{
    async fillName() {
        await registerPageObjects.userName.click();
        await registerPageObjects.userName.addValue(data.username);
    }
    async fillEmail() {
        await registerPageObjects.email.click();
        await registerPageObjects.email.addValue("someemail"+datestamp+"@mail.com");
    }
    async clickSignup() {
        await registerPageObjects.signUpButton.click();
    }
    async fillPassword() {
        await registerPageObjects.password.click();
        await registerPageObjects.password.addValue(data.password);
    }
    async selectDOB() {
        await registerPageObjects.DOBday.click();
        await browser.pause(1000);
        await registerPageObjects.DOBday.selectByIndex(10);

        await registerPageObjects.DOBmonth.click();
        await browser.pause(1000);
        await registerPageObjects.DOBmonth.selectByIndex(4);

        await registerPageObjects.DOByear.click();
        await browser.pause(1000);
        await registerPageObjects.DOByear.selectByIndex(15);
    }
    async signUpNewsletter() {
        await registerPageObjects.newsletterCheckbox.click();
    }
    async fillFirstName() {
        browser.execute(() =>{
            window.scrollTo(0, 500);
        });
        await registerPageObjects.firstname.addValue(data.firstname);
    }
    async fillLastName() {
        await registerPageObjects.lastname.addValue(data.lastname);
    }
    async fillCompany() {
        await registerPageObjects.company.addValue(data.company);
    }
    async fillAddress() {
        await registerPageObjects.address.addValue(data.address1);
    }
    async selectCountry() {
        browser.execute(() =>{
            window.scrollTo(500, 1000);
        });
        await registerPageObjects.country.click();
        await browser.pause(1000);
        await registerPageObjects.country.selectByIndex(3);
    }
    async fillState() {
        await registerPageObjects.state.addValue(data.state);
    }
    async fillCity() {
        await registerPageObjects.city.addValue(data.city);
    }
    async fillZipcode() {
        registerPageObjects.zipcode.addValue(data.zipcode);
    }
    async fillMobileNum() {
        registerPageObjects.mobNumber.addValue(data.mobileNum);
    }
    async clickCreateAccount() {
        await browser.pause(2000);
        registerPageObjects.createAccButton.click();
    }
}
module.exports = new RegisterPageActions();