var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require('mongoose');


var SimpsonsCtrl = require("./controllers/SimpsonsCtrl")

var app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Routes
var uri = "/simpsons";

app.post(uri, SimpsonsCtrl.create);
// app.get(uri, SimpsonsCtrl.read);
// app.put(uri + "/:id", SimpsonsCtrl.update);
// app.delete(uri + "/:id", SimpsonsCtrl.delete);

var port = 3039;
var mongoUri = 'mongodb://localhost:27017/springfield';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

var server = app.listen(port, function() {
    console.log("Listening at address", server.address());
});