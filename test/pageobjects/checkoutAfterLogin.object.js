
class CheckoutAfterLoginObjects{
    get deliveryAddress() {
        return $("(//ul[@id='address_delivery']/li)[4]");
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
    get placeOrderButton() {
        return $("//a[@href='/payment']");
    }
}
module.exports = new CheckoutAfterLoginObjects();