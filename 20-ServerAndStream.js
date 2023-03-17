const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); //pulls data from readStream to write stream
    });

    fileStream.on("error", (error) => {
      console.log(error);
    });
    // res.end(text);
  })
  .listen(5000);
