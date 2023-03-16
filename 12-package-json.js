// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
//npm init (setup step by step, enter to skip)
// npm init -y (everything default)
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("hello peole");
