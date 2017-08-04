"use strict";
class CardList {
    constructor() {
        this.cardListEl = document.querySelector('.cardList');
        this.cards = [...this.cardListEl.querySelectorAll('.cardr.card-shape')];
    }
    updateCards(cards) {
        this.cardListEl.innerHTML = '';
        cards.forEach(card => {
            this.cardListEl.appendChild(card);
        });
    }
}
class NameFilter {
    constructor(name) {
        this.name = name;
    }
    filter(cards) {
        this.filtered = cards.filter(card => card.innerHTML.includes(this.name));
    }
}
class Controller {
    constructor(config) {
        this.config = config;
        this.cardList = new CardList();
        this.nameFilter = new NameFilter(this.config.name);
        this.update();
    }
    update() {
        this.nameFilter.filter(this.cardList.cards);
        this.cardList.updateCards(this.nameFilter.filtered);
    }
}
setTimeout(() => {
    new Controller({ name: 'Douglas Bradshaw' });
}, 1000);
//# sourceMappingURL=main.js.map