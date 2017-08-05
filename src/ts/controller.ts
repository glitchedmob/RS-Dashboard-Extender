import {$on} from './helpers';

import Store from './store';
import View from './view';


export default class Controller
{
	public store: Store;
	public view: View;

	public constructor(store: Store, view: View)
	{
		this.store = store;
		this.view = view;

		this.view.insertApp(store.logo);
		$on(this.view.logo, 'click', this.togglePanel.bind(this));
		$on(this.view.searchButton, 'click', this.search.bind(this));
	}

	private togglePanel()
	{
		this.store.panelOpen = !this.store.panelOpen;
		this.view.panel.setAttribute('style', `display: ${this.store.panelOpen ? 'initial' : 'none'};`);
	}

	private search() 
	{
		this.store.searchTerm = this.view.searchInput.value;
		
		const results = this.view.cards.filter(card => card.innerHTML.includes(this.store.searchTerm));
		console.log(results);

		this.view.updateCards(results);
	}
}
