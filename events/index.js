const EventEmitter = require("events");

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()

const eventName = "use:click"

myEmitter.on(eventName, (click) => { console.log("Um usuário clicou", click);})