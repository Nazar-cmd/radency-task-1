


/*const date = new Date(2009, 10, 10);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today)*/

import PubSub from "../lib/pubsub.js";

export default class Store {
    constructor(params) {
        let self = this;

        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';

        self.events = new PubSub();

        if(params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }

        if(params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }

        self.state = new Proxy((params.state || {}), {
            set: function(state, key, value) {

                state[key] = value;

                console.log(`stateChange: ${key}: ${value}`);

                //console.log(self.events)

                self.events.publish('stateChange', self.state);

                //console.log(self.events)

                if(self.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                }

                self.status = 'resting';

                return true;
            }
        });
    }

    dispatch(actionKey, payload) {

        let self = this;

        if(typeof self.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey} doesn't exist.`);
            return false;
        }

        console.groupCollapsed(`ACTION: ${actionKey}`);

        self.status = 'action';

        self.actions[actionKey](self, payload);

        console.groupEnd();

        return true;
    }

    commit(mutationKey, payload) {
        let self = this;

        if(typeof self.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        self.status = 'mutation';

        let newState = self.mutations[mutationKey](self.state, payload);

        self.state = Object.assign(self.state, newState);

        return true;
    }
}