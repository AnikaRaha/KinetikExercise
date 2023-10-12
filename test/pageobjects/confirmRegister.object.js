class ConfirmRegisterObjects{
    get confirmationText(){
        return $("//b[contains(.,'Account Created!')]");
    }
    get continueButton() {
        return $("//a[contains(.,'Continue')]");
    }
    get loggedInUsername() {
        return $("//a[contains(.,'Logged in as')]");
    }
}
module.exports = new ConfirmRegisterObjects();