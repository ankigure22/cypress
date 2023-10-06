import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import '../support/utils.js';
import { sub } from "../support/utils.js";
it.only('Should login to inventory page', () =>{

    cy.visit('https://bstackdemo.com/')
    
    homePage.clickOnSignin();
    loginPage.login();
    homePage.elements.logOffBtn().should('have.text','Logout')
})

it.only('Subtract funt;ion',()=> {
    const d=sub(5,1);
    assert.equal(d,4)
    cy.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTT")
})