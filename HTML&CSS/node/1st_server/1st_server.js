const http = require('http');
const file = require('fs');
let port ='127.0.0.1'
let read = file.readFileSync('./read.html');
const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-type', 'text/html');
    res.writeHead(200, { 'Content-type':'text/html' });
    res.end(read);
});
server.listen(8000, port, () => {
    console.log(`http://${port}:8000`);
});