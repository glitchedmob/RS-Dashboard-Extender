class CardList 
{
	public cardListEl: HTMLElement;
	public cards: Element[];

	public constructor()
	{
		this.cardListEl = <HTMLElement>document.querySelector('.cardList');
		this.cards = [...this.cardListEl.querySelectorAll('.cardr.card-shape')];
	}

	public updateCards(cards: Element[])
	{
		this.cardListEl.innerHTML = '';
		cards.forEach(card => {
			this.cardListEl.appendChild(card);
		});
	}
}

class NameFilter 
{
	private name: string;
	public filtered: Element[];

	public constructor(name: string)
	{
		this.name = name;
		
	}

	public filter(cards: Element[])
	{
		this.filtered = cards.filter(card => card.innerHTML.includes(this.name));
	}

}

class Controller
{
	public config: any;
	public cardList: CardList;
	public nameFilter: NameFilter;

	public constructor(config: any)
	{
		this.config = config;
		this.cardList = new CardList();
		this.nameFilter = new NameFilter(this.config.name);
		this.update();
	}

	public update()
	{
		this.nameFilter.filter(this.cardList.cards);
		this.cardList.updateCards(this.nameFilter.filtered)
	}
}

setTimeout(() => {
	new Controller({name: 'Douglas Bradshaw'});
}, 1000);


