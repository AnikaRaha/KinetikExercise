const confirmRegisterObject = require("../pageobjects/confirmRegister.object");
const data = require("../data/data.json");

class ConfirmRegisterActions{
    async confirmText() {
        await confirmRegisterObject.confirmationText.getText() == data.regConfirmText;
    }
    async clickContinue() {
        await confirmRegisterObject.continueButton.click();
    }
    async confirmLogin() {
        await confirmRegisterObject.loggedInUsername.getValue() == data.username;
    }
}
module.exports = new ConfirmRegisterActions();