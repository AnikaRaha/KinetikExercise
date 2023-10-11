const homePageAction = require("../pageActions/homePage.actions");
const cartPageAction = require("../pageActions/cartPage.actions");
const registerPageAction = require("../pageActions/registerPage.actions");
const registerPageActions = require("../pageActions/registerPage.actions");

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
        await registerPageAction.clickSignup();
    })
    it("Fill up registration form", async()=>{
        await registerPageAction.fillPassword();
        await registerPageAction.selectDOB();
        await registerPageAction.signUpNewsletter();
        await registerPageAction.fillFirstName();
        await registerPageAction.fillLastName();
        await registerPageAction.fillCompany();
        await registerPageAction.fillAddress();
        await registerPageAction.selectCountry();
        await registerPageAction.fillState();
        await registerPageAction.fillCity();
        await registerPageAction.fillZipcode();
        await registerPageAction.fillMobileNum();
        await registerPageAction.clickCreateAccount();
        await browser.pause(2000);
    })
})