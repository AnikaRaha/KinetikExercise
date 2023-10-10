class CartPageObjects{
    get cartPageBreadcrumb(){
        return $("//li[contains(.,'Shopping Cart')]");
    }
    get checkoutButton(){
        return $("//a[contains(.,'Proceed To Checkout')]");
    }
}
module.exports = new CartPageObjects();