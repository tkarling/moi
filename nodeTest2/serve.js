'use strict'

// npm install --save express@4.x
// npm install --save body-parser

var http = require("http");
var server = http.createServer();
var port = 8282;
var app = require("./app").create();

server.on("request", app);

server.listen(port, function() {
    console.log("listening in address: ", server.address());
});
