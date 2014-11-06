var http = require('http');
var express = require('express');
var app = express();

app.get("/", function (request, response) { 
    response.send('<html><body><h1>Hola Mundo!!!</h1></body></html>')
});

app.get("/users/", function (request, response) { 
    response.set("Content-Type", "application/json");
    response.send({ nombre: "andres", profesion: "programador" });
});

var server = http.createServer(app);

server.listen(3000);