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
}
module.exports = new CartPageActions();