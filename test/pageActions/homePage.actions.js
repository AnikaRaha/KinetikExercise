const homePageObjects = require("../pageobjects/homePage.object");
const expect = require("chai").expect;

class HomePageAction{
    async verifyHomePage() {
        let actualColor = await homePageObjects.homeManu.getCSSProperty('color');
        console.log(actualColor.parsed.hex);
        let expectedColor = "#ffa500";
        expect(actualColor.parsed.hex).to.include(expectedColor);
    }
    async hoverOnItem1() {
        // await homePageObjects.item1.scrollIntoView();
        browser.execute(() =>{
            window.scrollTo(0, 500);
        });
        await homePageObjects.item1.moveTo();
    }
    async addItem1ToCart() {
        await homePageObjects.item1AddCart.click();
    }
    async clickContinueShopping() {
        await homePageObjects.continueShoppingButton.click();
    }
    async hoverOnItem2() {
        // await homePageObjects.item1.scrollIntoView();
        // browser.execute(() =>{
        //     window.scrollTo(0, 500);
        // });
        await homePageObjects.item2.moveTo();
    }
    async addItem2ToCart() {
        await homePageObjects.item2AddCart.click();
    }
    async clickCart() {
        await homePageObjects.cartButton.click();
    }
}
module.exports = new HomePageAction();