const { readFile, read } = require("fs");

console.log(`started a first task`);

//Check file path!!!
readFile(`./content/first.txt`, "utf-8", (err, result) => {
  if (err) return;
  console.log(result);
  console.log("Completed first Task");
});

console.log(`starting next task`);
