const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`
); // node will automatically any directory if the folder is not there
// if there then no new dir is created
// node will also overwrite the file . to append then there is a flag

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" } // append flag
);
