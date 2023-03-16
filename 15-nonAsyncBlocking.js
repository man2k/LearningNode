const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Home Page`);
    return;
  }
  if (req.url === "/about") {
    res.end(`About Page`);

    //BLOCKING CODE
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}.${j}`);
      }
    }
    return;
  } else {
    res.end(`Error`);
    return;
  }
});

server.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
