const ons = require('onsenui');
const navigator = document.querySelector('#navigator');

module.exports = {
    getTodos,
    hideSignInDialog,
    openMenu,
    signIn,
    signOut,
    viewTodo
};

function getTodos(state) {
    return {
        todos: [
            {
                id: 1,
                text: 'Hello World'
            },
            {
                id: 2,
                text: 'Haskell is a purely functional language.'
            },
            {
                id: 3,
                text: 'Hugelkultur is gardening technique.'
            }
        ]
    };
}

function hideSignInDialog(state) {
    const signInDialog = document.querySelector('#sign-in-dialog');

    signInDialog.hide();
}

function openMenu(state) {
    const menu = document.querySelector('#menu');
    menu.open();
}

function signIn({ email, password }) {
    if (email && password) {
        navigator.replacePage('pages/splitter.html');
    } else {
        const signInDialog = document.querySelector('#sign-in-dialog');
        
        if (signInDialog) {
            signInDialog.show();
        } else {
            ons
                .createDialog('pages/sign-in-dialog.html')
                .then(dialog => {
                    dialog.show();
                });
        }
    }
}

function signOut(state) {
    navigator.replacePage('pages/sign-in.html')
}

function viewTodo(state, data, bindings) {
    document.querySelector('#todo-navigator').pushPage('pages/todos-view.html');
    return { todo: bindings.todo };
}