const homePageAction = require("../pageActions/homePage.actions");
const cartPageAction = require("../pageActions/cartPage.actions");
const registerPageAction = require("../pageActions/registerPage.actions");

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
    it("Go to cart page and proceed", async()=>{
        await homePageAction.clickCart();
        await cartPageAction.verifyCartPage();
        await cartPageAction.proceedToCheckout();
        await cartPageAction.clickRegister();
    })
    it("Proceed to registration", async()=>{
        await registerPageAction.fillName();
        await registerPageAction.fillEmail();
        await browser.pause(2000);
        await registerPageAction.clickSignup()
        await browser.pause(2000);
    })
    it("Fill up registration form", async()=>{
        await registerPageAction.dateOfBirth();
    })
})