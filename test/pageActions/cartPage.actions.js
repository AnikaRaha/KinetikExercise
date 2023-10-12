const cartPageObjects = require("../pageobjects/cartPage.object");
const data = require("../data/data.json");
const cartVerifier = data.cart_verifier;

class CartPageActions{
    async verifyCartPage(){
        cartPageObjects.cartPageBreadcrumb.getText() == cartVerifier;
    }
    async proceedToCheckout(){
        cartPageObjects.checkoutButton.click();
    }
    async clickRegister(){
        cartPageObjects.registerButton.click();
    }
    async storeCartItem1() {
        const item1Name = await cartPageObjects.cartItem1Name.getText();
        const item1Price = await cartPageObjects.cartItem1Price.getText();
    }
    async storeCartItem2() {
        const item2Name = await cartPageObjects.cartItem2Name.getText();
        const item2Price = await cartPageObjects.cartItem2Price.getText();
    }
}
module.exports = new CartPageActions();