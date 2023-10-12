const checkoutAfterLoginObjects = require("../pageobjects/checkoutAfterLogin.object");
const data = require("../data/data.json");

class CheckoutAfterLoginActions{    
    async verifyDeliveryAddress() {
        await checkoutAfterLoginObjects.deliveryAddress.getText();
        // await expect(deliveryAddress).equals(data.address1);
    }
    async verifyItem1() {
        await checkoutAfterLoginObjects.cartItem1Name.getText() == data.item_1;
        await checkoutAfterLoginObjects.cartItem1Price.getText() == data.item_1_pr;
    }
    async verifyItem2() {
        await checkoutAfterLoginObjects.cartItem2Name.getText() == data.item_2;
        await checkoutAfterLoginObjects.cartItem2Price.getText() == data.item_2_pr;
    }
    async clickPlaceOrder() {
        await checkoutAfterLoginObjects.placeOrderButton.click();
    }
}
module.exports = new CheckoutAfterLoginActions();