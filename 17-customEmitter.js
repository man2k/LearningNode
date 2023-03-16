const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id:${id}`);
}); //order matters // will be executed first

//customEmitter.emit(`response`); // if this is placed above the listener then the code won't be executed

customEmitter.on("response", () => {
  console.log(`Some other logic here`);
}); //will execute second

customEmitter.emit(`response`, "john", 34); // if this is placed above the listener then the code won't be executed
