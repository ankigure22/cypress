
class homePage{
    elements ={
       // loginBtn : () => cy.get("#signin"),
        logOffBtn : () => cy.get("#logout"),
        loginBtn :() => cy.get("#signin")
    }
    clickOnSignin(){
        this.elements.loginBtn().click()
    }
}
module.exports = new homePage();