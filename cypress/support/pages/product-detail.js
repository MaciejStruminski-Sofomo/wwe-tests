class productDetails {
    productDetailsForm() {
        return cy.get('[data-test-id="ProductDetailProvider_form"]');
    }
    productSizeAvailable() {
        return cy
            .get('[data-test-id="SizeList"]')
            .find('.ProductSizes-sizeInfo-35r')
            .not('[data-stock-status="OutOfStock"]');
    }
    basketTotalItems() {
        return cy.get('.ProductActions-productActionsTotalQty-kEE > .ProductActions-productActionsDetail-1hB');
    }
    basketAddButton() {
        return cy.get('.ProductActions-productActionsAdd-3AO');
    }
    modal() {
        return cy.get('[data-test-id="Modal"]');
    }
    continueShoppingButton() {
        return cy.get('.Modal-modalEscape-1_n');
    }
    modalAddLogo() {
        return cy.get('span').contains('Add your logo now');
    }
    productPrice() {
        return cy.get('.ProductDetail-productDetailPrice-13W');
    }
    customisationTab() {
        return cy.get('button[type="button"]').contains('Logo Pricing');
    }
    customisationModal() {
        return cy.get('.CustomisationSidebar-modalContainer-1g3');
    }
    itemCountTreshold() {
        return cy.get('.TieredPricing-tieredItemQty-iuj');
    }
    itemPriceTreshold() {
        return cy.get('.TieredPricing-tieredItemPrice-1Yg');
    }
    itemTier() {
        return cy.get('.TieredPricing-tieredItem-2oP');
    }
    cutomisationCalculatorInput() {
        return cy.get('input[class="CustomisationSidebar-quantityInput-7hv"]');
    }
    cutomisationCalculatorPricePerGarmet() {
        return cy.get('.CustomisationSidebar-price-30x').eq(0);
    }
    cutomisationCalculatorPricePerLogo() {
        return cy.get('.CustomisationSidebar-price-30x').eq(1);
    }
    cutomisationCalculatorPriceTotal() {
        return cy.get('.CustomisationSidebar-cellPriceTotal-1uv');
    }
    addLogoButton() {
        return cy.get('span.button__content').contains('Add your logo now');
    }
    viewBasket() {
        return cy.get('a').contains('View Basket');
    }
}
export default new productDetails();