const homePageAction = require("../pageActions/homePage.actions");

describe("Automation Exercise Suite", ()=>{
    it("Verify home page", async()=>{
        await homePageAction.verifyHomePage();
    })
    it("Add items to cart", async()=>{
        await homePageAction.hoverOnItem1();
        await homePageAction.addItem1ToCart();
    })
})