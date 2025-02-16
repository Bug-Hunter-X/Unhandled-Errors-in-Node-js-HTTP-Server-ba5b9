const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000, () => {
  console.log('Server started on port 3000');
});

//This will cause the server to crash without proper error handling if there is an issue with the server start up

//Adding error handling to the server creation and listening process will make the code more robust