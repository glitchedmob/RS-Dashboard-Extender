import {qs, qsa} from './helpers';

export default class View 
{
	/**
	 * The div the app lives in
	 */
	public appContainer: Element;

	/**
	 * div with all of the fronend options
	 */
	public panel: Element;

	/**
	 * Image tag containing the logo
	 */
	public logo: Element;

	/**
	 * Tags for the search box in the options panel
	 */
	public searchInput: HTMLInputElement;
	public searchButton: Element; 

	public cardsWrapper: Element;
	public cards: Element[];


	/**
	 * Inserts app into the page
	 */
	public insertApp(logo: string)
	{
		const app = document.createElement('div');
		app.setAttribute('id', 'rs-dashboard-extender');
		document.body.appendChild(app);

		this.appContainer = <HTMLElement>document.querySelector('#rs-dashboard-extender');
		this.appContainer.innerHTML = `
			<img src="${logo}" id="rsdbe-logo">
			<div id="rsdbe-options-panel">
				<div id="rsdbe-arrow-up"></div>
				<input type="text" id="rsdbe-search">
				<button id="rsdbe-search-button">Search</button>
			</div>
		`;

		this.cacheElements();
	}

	/**
	 * Cache all of the DOM Elements used throughout the app
	 */
	public cacheElements()
	{
		this.panel = qs('#rsdbe-options-panel', this.appContainer);
		this.logo = qs('#rsdbe-logo', this.appContainer);
		this.searchInput = <HTMLInputElement>qs('#rsdbe-search', this.appContainer);
		this.searchButton = qs('#rsdbe-search-button', this.appContainer);
		this.cardsWrapper = qs('.cardList');
		this.cards = [...qsa('.cardr.card-shape', this.cardsWrapper)];
	}

	/**
	 * Refreshes all of the cards in the DOM
	 * @param cards Array of DOM Elements to inject into the page
	 */
	public updateCards(cards: Node[])
	{
		this.cardsWrapper.innerHTML = "";
		cards.forEach(card => {
			this.cardsWrapper.appendChild(card);
		});
	}
}