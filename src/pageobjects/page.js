class Page {
    constructor() {
        this.logo = $(".desktop-logo .header__logo-dark");
        this.magnifier = $(".header-search__button");
        this.inputfield = $(".search-results__input-holder input");
        this.find = $(".search-results__action-section button");
        this.counter = $(".search-results__counter");
    }

    async addSearchTerm(searchTerm) {
        this.inputfield.click();
        this.inputfield.addValue(searchTerm);
}

}

module.exports = Page;
