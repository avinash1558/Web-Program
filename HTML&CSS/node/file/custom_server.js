//it is module
const http = require('http');
const file = require('fs');
//it is local host
const host_id = '127.0.0.1';
const port = 3000;
//it is read file
let r1 = file.readFileSync('1st.html');
// the (./) are use becuase the file read 1st.html file
//then  ./ are use for back into file
let r2 = file.readFileSync('./2nd.html');
let r3 = file.readFileSync('./3rd.html');
let r4 = file.readFileSync('./4th.html');
const server = http.createServer((req, res) => {
    //it is print the url when go to server
    console.log(req.url);
    // it store url and it is store character
    url =req.url;
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    // res.writeHead(200,'Content-type', 'text/html')
    // (/) so r1 are run
    if (url == '/') {
    res.end(r1);  
    }
    else if (url == '/2nd') {
    res.end(r2); 
    }
    else if (url == '/3rd') {
    res.end(r3);  
    }
    else if (url == '/4th') {
    res.end(r4);  
    }
    else{
        res.statusCode=404;
        //it is print in wed server
        res.end("<h1> 404 are not found</h1>");
    }
});

server.listen(port, host_id, () => {
// server.listen(3000, '127.0.0.1', () => {
    console.log('server running http://127.0.0.1:3000');
});
//terminal when is not run in file then 
//node./file/main.js
//terminal file error
//cd filename
//ls // it is not need
//node filename.js