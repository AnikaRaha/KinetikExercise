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
}
module.exports = new CartPageObjects();