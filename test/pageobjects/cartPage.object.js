const data = require("../data/data.json");

class CartPageObjects{
    get cartPageBreadcrumb(){
        return $("//li[contains(.,'Shopping Cart')]");
    }
    get checkoutButton(){
        return $("//a[contains(.,'Proceed To Checkout')]");
    }
    get registerButton(){
        return $("(//a[@href='/login'])[2]");
    }
    get cartItem1Name() {
        return $("//tr[@id='product-1']/td[@class='cart_description']/h4/a");
    }
    get cartItem2Name() {
        return $("//tr[@id='product-2']/td[@class='cart_description']/h4/a");
    }
    get cartItem1Price() {
        return $("//tr[@id='product-1']/td[@class='cart_price']/p");
    }
    get cartItem2Price() {
        return $("//tr[@id='product-2']/td[@class='cart_price']/p");
    }
}
module.exports = new CartPageObjects();