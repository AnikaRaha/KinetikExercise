const data = require("../data/data.json");
const paymentPageObjects = require("../pageobjects/paymentPage.object");
const expect = require("chai").expect;

class PaymentPageActions{
    async fillNameOnCard() {
        await paymentPageObjects.nameOnCardField.addValue(data.nameOnCard);
    }
    async fillCardNumber() {
        await paymentPageObjects.cardNumberField.addValue(data.cardNumber)
    }
    async fillCVC() {
        await paymentPageObjects.CVCField.addValue(data.cvc);
    }
    async fillExpireMonth() {
        await paymentPageObjects.expireMonthField.addValue(data.expiryMonth);
    }
    async fillExpireYear() {
        await paymentPageObjects.expireYearField.addValue(data.expiryYear);
    }
    async clickConfirmPayment() {
        await browser.pause(1000); 
        await paymentPageObjects.confirmPaymentButton.click();
    }
    async verifyConfirmText() {
        let confirmText = await paymentPageObjects.paymentConfirmText.getText();
        expect(confirmText).toHaveText(data.confirmText);
    }
}
module.exports = new PaymentPageActions();