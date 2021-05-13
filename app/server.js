const http = require('http');

const message = process.env.MESSAGE || 'Hello Buddy!';
const port = process.env.APP_PORT || 3000;

const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${message}\n`);
};

const server = http.createServer(handler);

server.listen(port, () => {
  console.log(`SERVER is listening at http://localhost:${port}`);
});
