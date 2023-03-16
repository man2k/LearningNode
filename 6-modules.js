// Modules
// in CommonJS every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./3-module");
const sayHi = require("./4-utils");
const items = require("./5-alternative-exports");
require("./mind-gre");

// console.log(names);
sayHi(`Mank`);
// sayHi(names.john);
sayHi(names);

console.log(items);
