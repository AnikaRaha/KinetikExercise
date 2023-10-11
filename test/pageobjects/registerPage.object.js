class RegisterPageObjects{
    get userName() {
        return $("//input[@name='name']");
    }
    get email() {
        return $("(//input[@name='email'])[2]");
    }
    get signUpButton() {
        return $("//button[contains(.,'Signup')]");
    }
    get password() {
        return $("//input[@id='password']");
    }
    get DOBday() {
        return $("//select[@id='days']");
    }
    get DOBmonth() {
        return $("//select[@id='months']");
    }
    get DOByear() {
        return $("//select[@id='years']");
    }
    get newsletterCheckbox() {
        return $("//input[@id='newsletter']");
    }
    get firstname() {
        return $("//input[@id='first_name']");
    }
    get lastname() {
        return $("//input[@id='last_name']");
    }
    get company() {
        return $("//input[@id='company']");
    }
    get address() {
        return $("//input[@id='address1']");
    }
    get country() {
        return $("//select[@id='country']");
    }
    get state() {
        return $("//input[@id='state']");
    }
    get city() {
        return $("//input[@id='city']");
    }
    get zipcode() {
        return $("//input[@id='zipcode']");
    }
    get mobNumber() {
        return $("//input[@id='mobile_number']");
    }
    get createAccButton() {
        return $("//button[contains(.,'Create Account')]");
    }
}
module.exports = new RegisterPageObjects();