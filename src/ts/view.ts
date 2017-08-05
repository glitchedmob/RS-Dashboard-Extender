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
	public logo: Element;


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
				<input type="text">
				<button id="rsdbe-update-name">Update Name</button>
			</div>
		`;

		this.cacheElements();
	}

	public cacheElements()
	{
		this.panel = qs('#rsdbe-options-panel');
		this.logo = qs('#rsdbe-logo');
	}
}