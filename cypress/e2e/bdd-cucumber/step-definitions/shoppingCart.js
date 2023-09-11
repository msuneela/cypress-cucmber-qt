import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
import ItemListPage from '../../page-objects/item-list.page.js'
import checkoutPage from '../../page-objects/checkout.page.js';
before(() => {
    cy.visit('https://cms.demo.katalon.com/', { headers: { "Accept-Encoding": "gzip, deflate" } }, {responseTimeout:10000});

});
Given('I add four random items to my cart', () => {
    ItemListPage.itemlist.eq(0).trigger('mouseover');

    ItemListPage.addToCart.eq(0).click();
    ItemListPage.itemlist.eq(1).trigger('mouseover');

    ItemListPage.addToCart.eq(1).click();

    ItemListPage.itemlist.eq(2).trigger('mouseover');

    ItemListPage.addToCart.eq(2).click();

    ItemListPage.itemlist.eq(3).trigger('mouseover');

    ItemListPage.addToCart.eq(3).click();
    cy.wait(500);

})

When('I view my cart', () => {
    ItemListPage.cart.contains('Cart').click();
})

Then('I find total four items listed in my cart', () => {
    checkoutPage.checkoutItemList.should('have.length', 4)
})

When('I search for lowest price items', () => {
 // There is no sorting for price low to high in the page
})

When('I am able to remove the lowest price item from my cart', () => {
    checkoutPage.removeItem.first().click();
})

Then('I am able to verify three items in my cart', () => {
    checkoutPage.checkoutItemList.should('have.length', 3)

})

