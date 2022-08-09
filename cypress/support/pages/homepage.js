class homePage {
    homepageTitle() {
        return 'Workwear For All Sectors & Environments | Workwear Express';
    }
    pageTitle() {
        return cy.get('[data-test-id="PageTitle"]');
    }
    basketItems() {
        return cy.get('[data-test-id="BasketItemCount"]');
    }
    banner() {
        return cy.get('[data-test-id="Banner"]');
    }
    topCategories() {
        return cy.get('[data-test-id="categoryList"]');
    }
    topBrandsCarousel() {
        return cy.get('.Carousel-carouselWrapper-KkT');
    }
    basketLink() {
        return cy.get('a[href="/basket"]');
    }
    VatButton() {
        return cy.get('[data-test-id="VatSelect"]');
    }
    searchInput() {
        return cy.get('[data-test-id="SearchInput"]');
    }
    searchDropdown() {
        return cy.get('[data-test-id="SearchDropdown"]');
    }
    searchResult() {
        return cy.get('[data-test-id="ProductItem"]');
    }
    navItems(){
        return cy.get('.Nav-navItem-1iy > a');
    }
}
export default new homePage();