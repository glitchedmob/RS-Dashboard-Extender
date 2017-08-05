import {qs, qsa} from './helpers';

export default class View 
{
	/**
	 * The div the app lives in
	 */
	public appContainer: Element;


	/**
	 * Inserts app into the page
	 */
	public insertApp(logo: string)
	{
		const app = document.createElement('div');
		app.setAttribute('id', 'rs-dashboard-extender');
		document.body.appendChild(app);

		this.appContainer = <HTMLElement>document.querySelector('#rs-dashboard-extender');
		this.appContainer.innerHTML = `<img src="${logo}">`
	}
}