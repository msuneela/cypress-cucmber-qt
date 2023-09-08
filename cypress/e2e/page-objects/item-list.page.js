class ItemListPage{

    get itemlist(){
        return cy.get('.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail', { timeout: 5000 })
    }
    get addToCart(){
    return cy.get('.add_to_cart_button', { timeout: 5000 });
    }

    get cart(){
        return cy.get('li > a');
    }
    }
    export default new ItemListPage;