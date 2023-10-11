const registerPageObjects = require("../pageobjects/registerPage.object");

class RegisterPageActions{
    async fillName() {
        registerPageObjects.userName.click();
        registerPageObjects.userName.addValue("Anika Alam");
    }
    async fillEmail() {
        registerPageObjects.email.click();
        registerPageObjects.email.addValue("someemail@mail.com");
    }
    async clickSignup() {
        registerPageObjects.signUpButton.click();
    }
    async fillPassword() {
        registerPageObjects.password.click();
        registerPageObjects.password.addValue("Pas$w0rd");
    }
    async dateOfBirth() {
        const day = registerPageObjects.DOBday.getValue();
        await registerPageObjects.DOBday.selectByAttribute(day, 10);
    }
}
module.exports = new RegisterPageActions();