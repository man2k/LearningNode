const http = require("http");
const server = http.createServer((req, res) => {
  //req - incoming request // res - outgoing request
  //console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our server");
  }
  // res.write("Welcome to my server");
  // res.end();
  if (req.url === "/about") {
    res.end("Here is out short History");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p> We can't seem to find the page you are looking for</p>
  <a href="/"> Click to go to home</a>
  `);
  }
});

server.listen(5000); // PORT - 5000
