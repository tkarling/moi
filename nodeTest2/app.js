module.exports.create = function() {
    var express = require('express');
    var app = express();
    var staticServer = express.static(__dirname + '/public');
    var bodyParser = require("body-parser");

    function handler(req, res) {
    	console.log(req.body);
    	res.send(req.body);
    }

    function logger(req, res, next) {
    	console.log(req.method, req.url);
    	next();
    }

    // function getFriend(req, res) {
    //     var name = "friend";
    //     res.send({ message: "hello " + name});
    // }

    function getMessage(req, res) {
    	var name = req.params.name || "friend";
    	res.send({ message: "hello " + name});
    }

    app.use("/", logger);
    app.use("/", staticServer);
    app.use("/api", bodyParser.json()); //good
    // bodyParser.urlencoded()   volnerable (angular OK)

    app.get("/api/messages/", getMessage);
    app.get("/api/messages/:name", getMessage);
    app.post("/api/messages", handler);
    app.delete("/api/messages", handler);

    // app.post("/api/messages", handler)
    return app;
};
