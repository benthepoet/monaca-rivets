// State management store
class Store {
    constructor(actions = {}, state = {}) {
        this.actions = {};
        this.state = state;

        for (const key in actions) {
            const action = actions[key];
            this.actions[key] = (data, bindings) => {
                const result = action(this.state, data, bindings);
                if (typeof result === 'function') {
                    result(this.mutate);
                } else {
                    this.mutate(result);
                }
            }
        }
    }

    mutate(mutation = {}) {
        Object.assign(this.state, mutation);
    }
}

module.exports = {
    Store
};