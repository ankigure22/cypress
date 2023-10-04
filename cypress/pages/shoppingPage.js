require('@cypress/xpath');
class shoppingPage{
    elements ={
        selectAppleCategory : ()=>cy.xpath("//span[text()='Apple']"),
        selectSortDropdown : ()=> cy.get('select'),
        selectPhone : ()=> cy.xpath("(//div[text()='Add to cart'])[1]"),
        checkoutBtn :() => cy.xpath("//div[text()='Checkout']"),
        firstName :() => cy.get('input#firstNameInput'),
        lastName :() => cy.get('input#lastNameInput'),
        addressInput :() => cy.get('input#addressLine1Input'),
        postCodeInput :() => cy.get('input#postCodeInput'),
        provinceInput :()=> cy.get('input#provinceInput'),
        submitBtn :() => cy.get('#checkout-shipping-continue'),
        downloadLink :() => cy.get('#downloadpdf')
    }
    shoppingPage(){
        this.elements.selectAppleCategory().click();
        this.elements.selectSortDropdown().select(2);
        this.elements.selectPhone().click();
        this.elements.checkoutBtn().click();
        this.elements.firstName().type('Ankit');
        this.elements.lastName().type('Gureja');
        this.elements.addressInput().type('Grepvägen 9');
        this.elements.provinceInput().type('Tyresö');
        this.elements.postCodeInput().type('13543');
        this.elements.submitBtn().click();
        this.elements.downloadLink().click();



       
    }
}

module.exports = new shoppingPage();




