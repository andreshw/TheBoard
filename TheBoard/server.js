var http = require('http');
var express = require('express');
var app = express();

app.get("/", function (request, response) { 
    response.send('<html><body><h1>Hola Mundo!!!</h1></body></html>')
});

var server = http.createServer(app);

server.listen(3000);