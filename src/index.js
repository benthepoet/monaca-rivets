// NPM modules
const ons = require('onsenui');
const rivets = require('rivets');

// Onsen UI Stylesheets
require('onsenui/css/onsen-css-components.min.css');
require('onsenui/css/onsenui.css');

// Local modules
const actions = require('./actions');
const { Store } = require('./store');

// Setup state management store
const initialState = {
    title: 'Starter App'
};

const store = new Store(actions, initialState);

// Cache views for unbinding events
const views = {};

// Configure listeners for page events
document.addEventListener('init', (event) => {
    const page = event.target;
    
    if (page.matches('#todos-list')) {
        store.actions.getTodos();
    }
    
    bindElement(page);
});

document.addEventListener('destroy', (event) => {
    const page = event.target;
    
    unbindElement(page);
});

// Configure listeners for dialog events
document.addEventListener('preshow', (event) => {
    const dialog = event.alertDialog;
    
    bindElement(dialog); 
});

document.addEventListener('posthide', (event) => {
    const dialog = event.alertDialog;
    
    unbindElement(dialog);
});

function bindElement(element) {
    views[element.id] = rivets.bind(element, store);
}

function unbindElement({ id }) {
    if (views[id]) {
        views[id].unbind();
    }
}
