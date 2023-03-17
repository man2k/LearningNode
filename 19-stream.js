// Streams
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./content/big.txt", `Hello World ${i}\n`, { flag: "a" });
// }

const { createReadStream } = require("fs");
// const stream = createReadStream("./content/big.txt");

// default 64 kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt",{highWaterMark: 90000})
// const stream = createReadStream("./content/big.txt",{encoding: 'utf8'})

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  // reading in chunks. Helpful for reading big files
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
