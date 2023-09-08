class CheckoutPage{

    get checkoutItemList(){
        return cy.get('table > tbody > tr > td.product-thumbnail > a > img', { timeout: 5000 })
    }
    get checkoutPriceList(){
        return cy.get('form > table > tbody > tr > td.product-price > span', { timeout: 5000 })
    }
    get removeItem(){
        return cy.get('.remove');
    }
    }
    export default new CheckoutPage;