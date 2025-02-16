const http = require('http');

const server = http.createServer((req, res) => {
  //Improved error handling
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.on('error', (err) => {
  console.error('Server error:', err);
  // Additional error handling logic, e.g., logging, alerting
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});

//The addition of a server.on('error', (err)=>{}) listener will allow the server to handle errors gracefully and prevent unexpected crashes.