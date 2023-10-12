const confirmRegisterObject = require("../pageobjects/confirmRegister.object");
const data = require("../data/data.json");
const expect = require("chai").expect;

class ConfirmRegisterActions{
    async confirmText() {
        let confirmationText = await confirmRegisterObject.confirmationText.getText();
        expect(confirmationText).to.equal(data.regConfirmText);
    }
    async clickContinue() {
        await confirmRegisterObject.continueButton.click();
    }
    async confirmLogin() {
        let loggedInUsername = await confirmRegisterObject.loggedInUsername.getText();
        expect(loggedInUsername).to.contains(data.username);
    }
}
module.exports = new ConfirmRegisterActions();