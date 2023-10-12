const data = require("../data/data.json");
const homePageAction = require("../pageActions/homePage.actions");
const cartPageAction = require("../pageActions/cartPage.actions");
const registerPageAction = require("../pageActions/registerPage.actions");
const confirmRegisterAction = require("../pageActions/confirmRegister.actions");
const checkoutAfterLoginAction = require("../pageActions/checkoutAfterLogin.actions");
const paymentPageActions = require("../pageActions/paymentPage.actions");

describe("Automation Exercise Suite", ()=>{
    it("Verify home page", async()=>{
        await homePageAction.verifyHomePage(); //should be assertion
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
        await cartPageAction.verifyCartPage(); //should be assertion
        await cartPageAction.proceedToCheckout();
        await cartPageAction.storeCartItem1();
        await cartPageAction.storeCartItem2();
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
    })
    it("Verify accout is created and login", async()=>{
        await confirmRegisterAction.confirmText(); //should be assertion
        await confirmRegisterAction.clickContinue();
        await browser.pause(2000);
        await confirmRegisterAction.confirmLogin();
        await browser.pause(5000);
    })
    it("Proceed to checkout after login", async()=>{
        await homePageAction.clickCart();
        await cartPageAction.verifyCartPage(); //should be assertion
        await cartPageAction.proceedToCheckout();
    })
    it("Verify Address", async()=>{
        // await checkoutAfterLoginAction.verifyDeliveryAddress(); //should be assertion
        // await expect(await checkoutAfterLoginAction.verifyDeliveryAddress()).toHaveText(data.address1);
    })
    it("Verify items in cart", async()=>{
        // await checkoutAfterLoginAction.verifyItem1(); //should be assertion
        // await checkoutAfterLoginAction.verifyItem2(); //should be assertion
    })
    it("Place order", async()=>{
        await checkoutAfterLoginAction.clickPlaceOrder();
    })
    it("Fill up card information", async()=>{
        await paymentPageActions.fillNameOnCard();
        await paymentPageActions.fillCardNumber();
        await paymentPageActions.fillCVC();
        await paymentPageActions.fillExpireMonth();
        await paymentPageActions.fillExpireYear();
    })
    it("Confirm Payment", async()=>{
        await paymentPageActions.clickConfirmPayment();
        await paymentPageActions.verifyConfirmText(); //should be assertion
    })
})