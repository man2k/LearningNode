const path = require("path");

console.log(path.sep); // platform seperator for path

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absPath = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(absPath);
