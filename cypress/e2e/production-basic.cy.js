/// <reference types="cypress" />

import homepage from '../support/pages/homepage'
import productDetails from '../support/pages/product-detail'
import categoriesPage from'../support/pages/categories-product-pages'

describe('production basic tests', () => {
    var itemPrice;
    before(function() {
       
    });

    beforeEach(function() {
      
    });
    it('Should enter homepage', () => {
        cy.visit('https://www.workwearexpress.com/');
        cy.title().should('eq', "Workwear For All Sectors & Environments | Workwear Express");

        homepage.banner().should('be.visible');
    });
    it('Check if Top nav is visible', () => {
        homepage.navItems().should('have.length', 12);
    });
    it('Should click logo and check if redirected to homepage', () => {
        cy.visit('https://www.workwearexpress.com/about-us');
        cy.get('a[class=Header-headerLogoLink-SGA]').click();
        cy.url().should('eq', 'https://www.workwearexpress.com/');
    });
    it('Enter products page and check if items exists', { retries: 3 }, () => {
        cy.visit('https://www.workwearexpress.com/polo-shirts/all-polos');
        categoriesPage.categoryName().should('have.text', "All Polo Shirts");
        categoriesPage.categoryProductItem().should('have.length', 20);
        categoriesPage.pagination().should('be.visible');
    });
    it('check filters title', { retries: 3 }, () => {
        cy.wait(1000)
        categoriesPage.allFiltersBtn().should('be.visible');
        cy.get('button.LayeredNav-filterOptionToggle-1T8').should('have.length', 3).within(button => {
            expect(button[0]).contain('Colour');
            expect(button[1]).contain('Features');
            expect(button[2]).contain('Material');
        });
    });
    it('check if image is visible', () => {
      cy.visit('https://www.workwearexpress.com/polo-shirts/all-polos')
        categoriesPage.categoryProductItem().first().within(() => {
            cy.get('img').and($img => {
                // "naturalWidth" and "naturalHeight" are set when the image loads
                expect($img[1].naturalWidth).to.be.greaterThan(0);
            });
        });
    });
    it('Should enter single product page and check title and logo',{ retries: 3 }, () => {
        cy.visit('https://www.workwearexpress.com/fruit-of-the-loom-premium-polo-shirt/');
        cy.get('h1').should('contain', 'Fruit Of The Loom Premium Polo Shirt');
        // cy.get('h1')
        //     .siblings()
        //     .within(() => {
        //         cy.get('.ProductDetail-icon-23M').should('have.css', 'background');
        //     });
    });
    it('Check product img', () => {
        cy.get('.ProductGallery-gallery-2mW').within(() => {
            cy.get('img').and($img => {
                // "naturalWidth" and "naturalHeight" are set when the image loads
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
        });
    });
    it('Check product price', () => {
        productDetails.productPrice()
            .invoke('text')
            .then(text => {
                itemPrice = text.replace('£', '').trim();
                itemPrice = parseFloat(itemPrice).toFixed(2);
            })
            .then(() => {
                expect(itemPrice).be.equal('9.94');
            });
    });
    it('Should enter red polo in search field and check if results are displayed',{ retries: 3 }, () => {
        cy.visit('https://www.workwearexpress.com/');
        //homepage.acceprCookie()
        homepage.searchInput().type('red polo{enter}');
        cy.wait(2000)
        homepage.searchResult().should('have.length.at.least', 1);
        homepage.pageTitle().should('contain', "red polo");
        categoriesPage.filterHeading().within(button => {
            expect(button[0]).contain('Colour');
        });
    });
});