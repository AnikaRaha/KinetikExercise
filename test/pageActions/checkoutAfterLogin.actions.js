const checkoutAfterLoginObjects = require("../pageobjects/checkoutAfterLogin.object");
const data = require("../data/data.json");
const expect = require("chai").expect;

class CheckoutAfterLoginActions{    
    async verifyDeliveryAddress() {
        let deliveryAddress = await checkoutAfterLoginObjects.deliveryAddress.getText();
        expect(deliveryAddress).to.contain(data.address1);
    }
    async verifyItem1() {
        let item1Name = await checkoutAfterLoginObjects.cartItem1Name.getText();
        let item1Price = await checkoutAfterLoginObjects.cartItem1Price.getText();
        expect(item1Name).to.equal(data.item_1);
        expect(item1Price).to.contain(data.item_1_pr);
    }
    async verifyItem2() {
        let item2Name = await checkoutAfterLoginObjects.cartItem2Name.getText();
        let item2Price = await checkoutAfterLoginObjects.cartItem2Price.getText();
        expect(item2Name).to.equal(data.item_2);
        expect(item2Price).to.contain(data.item_2_pr);
    }
    async clickPlaceOrder() {
        await checkoutAfterLoginObjects.placeOrderButton.click();
    }
}
module.exports = new CheckoutAfterLoginActions();