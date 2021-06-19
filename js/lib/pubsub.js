export default class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {

        let self = this;

        if(!self.events.hasOwnProperty(event)) {
            console.log("hasnt own property")
            self.events[event] = [];

            //console.log(self.events)
        }

        return self.events[event].push(callback);
    }

    publish(event, data = {}) {

        let self = this;

        console.log(self.events)

        if(!self.events.hasOwnProperty(event)) {
            return [];
        }

        return self.events[event].map(callback => callback(data));
    }
}