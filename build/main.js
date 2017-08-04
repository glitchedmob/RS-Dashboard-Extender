"use strict";
class CardFilter {
    constructor(name) {
        console.log('I am working bithc');
        this.name = name;
        this.cardList = document.querySelector('.cardList');
        this.cards = [...this.cardList.querySelectorAll('.cardr.card-shape')];
        this.filtered = this.cards.filter(card => card.innerHTML.includes(this.name));
        this.attachFilteredCards();
    }
    attachFilteredCards() {
        this.cardList.innerHTML = '';
        this.filtered.forEach(card => {
            this.cardList.appendChild(card);
        });
    }
}
setTimeout(() => {
    new CardFilter('Douglas Bradshaw');
}, 1000);
//# sourceMappingURL=main.js.map