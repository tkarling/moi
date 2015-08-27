var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var port = 3033;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS
app.get("/api/message", function(req, res) {
	res.send({message: "Hello World!!"});
});

app.post("/api/receive_message", function(req, res) {
	console.log(req.body);
	res.send();
});

var server = app.listen(port, function() {
	console.log("Listening at address", server.address());
});
