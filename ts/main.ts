class CardFilter 
{
	private name: string;
	private cardList: HTMLElement;
	private cards: Element[];
	private filtered: Element[];

	public constructor(name: string)
	{
		console.log('I am working bithc');
		this.name = name;
		this.cardList = <HTMLElement>document.querySelector('.cardList');
		this.cards = [...this.cardList.querySelectorAll('.cardr.card-shape')];
		this.filtered = this.cards.filter(card => card.innerHTML.includes(this.name));
		this.attachFilteredCards();
	}

	private attachFilteredCards()
	{
		this.cardList.innerHTML = '';
		this.filtered.forEach(card => {
			this.cardList.appendChild(card);
		});
	}
}

setTimeout(() => {
	new CardFilter('Douglas Bradshaw');
}, 1000);


