const data = require("../data/data.json");
const item_1 = data.item_1;
const item_2 = data.item_2;

class HomePageObjects{
    get homeManu() {
        return $("//a[contains(.,'Home')]");
    }
    get item1() {
        return $("(//p[contains(.,'"+item_1+"')])[1]");
    }
    get item2() {
        return $("(//p[contains(.,'"+item_2+"')])[1]");
    } 
    get item1AddCart() {
        return $("(//a[@data-product-id=1])[2]");
    }
    get item2AddCart() {
        return $("(//a[@data-product-id=2])[2]");
    }
    get continueShoppingButton() {
        return $("//button[contains(.,'Continue Shopping')]");
    }
    get cartButton() {
        return $("(//a[@href='/view_cart'])[1]");
    }
}
module.exports = new HomePageObjects();