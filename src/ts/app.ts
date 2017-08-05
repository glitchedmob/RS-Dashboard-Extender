import Store from './store';
import View from './view';
import Controller from './controller';

const store = new Store();
const view = new View();

setTimeout(() => {
	const controller = new Controller(store, view);
}, 1000)
