import Store from './store';
import View from './view';
import Controller from './controller';

const store = new Store();
const view = new View();

// Since most page data is pulled in via AJAX,
// our app needs to delay it's start to account for that
// Eventually I want to find out how to perform this using events
setTimeout(() => {
	const controller = new Controller(store, view);
}, 1000)
