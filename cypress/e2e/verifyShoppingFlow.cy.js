import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import shoppingPage from "../pages/shoppingPage";

describe('Test to buy Apple phone and validate recipt', () => {
const path = require("path");
it('Should buy highest price apple phone from inventory page', () =>{

    cy.visit('https://bstackdemo.com/')
    
    homePage.clickOnSignin();
    loginPage.login();
    shoppingPage.shoppingPage();
    cy.get('[data-test="shipping-address-heading"]').should(
        "have.text","Your Order has been successfully placed."
      );
    })
    
it('Verify the downloaded file', () => {
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, "confirmation.pdf")).should("exist");
   
      });

 it('delete download folder', () => {
        
    cy.task("isFileExist", { fileName: `.${path.sep}downloads${path.sep}confirmation.pdf`}).then(() => {
    cy.deleteDownloadsFolder()
    
        });
})
})
