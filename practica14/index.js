const http = require('http');

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    res.write(`<h1>Wassup u fool ahhh</h1>`);
    res.write(`<ul><li>JS</li><Li> Python</li><li>Java</li></ul>`);
    res.end(req.url + '<br>');
    res.end(req.method);
});

server.listen(PUERTO, () => {
    console.log('port on 3000');
});