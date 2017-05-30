const http = require('http');

const message = process.env.MESSAGE || "hello buddy!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${message}\n`);
}).listen(3000);
