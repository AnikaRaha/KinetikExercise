const data = require("../data/data.json");

class PaymentPageObjects{
    get nameOnCardField() {
        return $("//input[@name='name_on_card']");
    }
    get cardNumberField() {
        return $("//input[@name='card_number']");
    }
    get CVCField() {
        return $("//input[@name='cvc']");
    }
    get expireMonthField() {
        return $("//input[@name='expiry_month']");
    }
    get expireYearField() {
        return $("//input[@name='expiry-year']");
    }
    get confirmPaymentButton() {
        return $("//button[@id='submit']");
    }
    get paymentConfirmText() {
        return $("//form/div/div[contains(.,'Your order has been placed successfully!')]");
    }
}
module.exports = new PaymentPageObjects();