class categoriesProductsPage {
    pagination() {
        return cy.get('.pagePagination');
    }
    paginationPage() {
        return cy.get('.ais-Pagination-item');
    }
    categoryName() {
        return cy.get('[data-test-id="PageTitle"]');
    }
    categoryProductItem() {
        return cy.get('[data-test-id="ProductItem"]');
    }
    categoryPagination() {
        return cy.get('.pagePagination');
    }
    productList() {
        return cy.get('ul[class=ProductList-productList-uOm]');
    }
    filters() {
        return cy.get('div[class="LayeredNav-filtersSelections-SKk"]');
    }
    filterHeading() {
        return cy.get('.LayeredNav-filterOptionToggle-1T8');
    }
    modalActivefiltersList() {
        return cy.get('div.LayeredNav-modalNav-3TS .LayeredNav-filtersCurrentList-1Q4');
    }
    activeFiltersList() {
        return cy.get('.LayeredNav-filtersCurrentList-1Q4');
    }
    activeFiltersClearBtn() {
        return cy.get('.LayeredNav-filterClear-K8D');
    }
    modalActiveFiltersClearBtn() {
        return cy.get('.Modal-modalRemoveFilters-XKq');
    }
    productTag() {
        return cy.get('.ProductList-tag-3bv');
    }
    sorterSelect() {
        return cy.get('div[title="Sorter"]');
    }
    pricesRange() {
        return cy.get('span.ProductList-productListPrice-3dj > b > span');
    }
    filtersModal() {
        return cy.get('div.LayeredNav-modalNav-3TS');
    }
    allFiltersBtn() {
        return cy.get('[data-test-id="All-Filters"]');
    }
    closeFilterModalBtn() {
        return cy.get('.Modal-modalClose-2SN');
    }
    //Filters
    setColourFilter(color) {
        cy.get('div.LayeredNav-modalNav-3TS input[data-value="' + color + '"]')
            .parentsUntil('li')
            .click();
    }
    setFilter(filterName) {
        cy.get('div.LayeredNav-modalNav-3TS input[data-value="' + filterName + '"]')
            .parent()
            .click()
            .children()
            .should('be.checked');
    }
}
export default new categoriesProductsPage();
