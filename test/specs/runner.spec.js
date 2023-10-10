const homePageAction = require("../pageActions/homePage.actions");
const cartPageAction = require("../pageActions/cartPage.actions");

describe("Automation Exercise Suite", ()=>{
    it("Verify home page", async()=>{
        await homePageAction.verifyHomePage();
    })
    it("Add items to cart", async()=>{
        await homePageAction.hoverOnItem1();
        await homePageAction.addItem1ToCart();
        await browser.pause(2000);
        await homePageAction.clickContinueShopping();
        await homePageAction.hoverOnItem2();
        await homePageAction.addItem2ToCart();
        await browser.pause(2000);
        await homePageAction.clickContinueShopping();
    })
    it("Go to cart page and verify", async()=>{
        await homePageAction.clickCart();
        await cartPageAction.verifyCartPage();
        await cartPageAction.proceedToCheckout();
        await browser.pause(2000);
    })
})