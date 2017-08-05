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
		$on(this.view.logo, "click", this.togglePanel.bind(this))
	}

	private togglePanel()
	{
		this.store.panelOpen = !this.store.panelOpen;
		this.view.panel.setAttribute('style', `display: ${this.store.panelOpen ? 'initial' : 'none'};`);
	}
}
