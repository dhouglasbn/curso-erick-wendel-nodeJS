const EventEmitter = require("events");

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()

const eventName = "user:click"

// escutando os eventos que ocorrerem em "user:click" e passando seus valores como função para dar log
myEmitter.on(eventName, (click) => { console.log("Um usuário clicou", click);})

// emitindo valores em "user:click"
myEmitter.emit(eventName, "na barra de rolagem")

// let count = 0;

// setInterval(() => {
//     myEmitter.emit(eventName, "no ok " + (count++))
    
// }, 1000);

// trabalhar com processos no treminal dessa pasta
const stdin = process.openStdin()

stdin.addListener("data", value => {
    console.log(`Você digitou ${value.toString().trim()}`);
})