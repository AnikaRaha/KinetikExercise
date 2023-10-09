const homePageObjects = require("../pageobjects/homePage.object");
const expect = require("chai").expect;

class HomePageAction{
    async verifyHomePage() {
        let actualColor = await homePageObjects.homeManu.getCSSProperty('color');
        console.log(actualColor.parsed.hex);
        let expectedColor = "#696763";
        expect(actualColor.parsed.hex).to.include(expectedColor);
    }
    async hoverOnItem1() {
        // await homePageObjects.item1.scrollIntoView();
        await homePageObjects.item1.moveTo();
    }
    async addItem1ToCart() {
        await homePageObjects.item1AddCart.click();
    }
}
module.exports = new HomePageAction();