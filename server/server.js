const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // routing
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'home.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(port, 'localhost', () => {
  console.log('listening for request on port 3000');
});
