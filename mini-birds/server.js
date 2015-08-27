var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var nodePort = 3035;

//Run mongoDB
var db = mongojs('birds', ['sightings']);
var port = 27017;


// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());


//ENDPOINTS
// app.get("/api/message", function(req, res) {
//     res.send({
//         message: "Hello World!!"
//     });
// });

// POST /api/sighting
// GET /api/sighting?region=america&species=redrobin
// PUT /api/sighting?id=09evasd09jhahs9d8h9vh
// DELETE /api/sighting?id=09evasd09jhahs9d8h9vh

app.post("/api/sighting", function(req, res) {
    console.log("post: ", req.body);
    // db.sightings.save(req.body);
    // res.send("OK");
    db.sightings.save(req.body, function(err, result) {
        if (err) {
            res.status(500).json(error);
        } else {
            console.log("post: ", req.body);
            res.json(result);
        }
    });
});

app.get("/api/sighting", function(req, res) {
    db.sightings.find(function(err, docs) {
        // docs is an array of all the documents in mycollection 
        if (!err) {
            console.log("get: ", docs);
            res.json(docs);
        } else {
            res.status(500).json(error);
        }
    });
});

app.put("/api/sighting", function(req, res) {
    console.log("put: params: ", req.params, " body: ", req.body, " query: ", req.query);
    db.sightings.update(req.query, req.body, function(err, doc) {
    	console.log("put", err, doc);
        if (err) {
            res.status(500).json(err);
        } else {
            console.log("put: ", doc);
            res.json(doc);
        }
    });
    // db.sightings.findAndModify({
    //     query: req.query,
    //     // {
    //     //     bird: req.query.bird
    //     // },
    //     update: {
    //         $set: req.body
    //      },
    //     new: true
    // }, function(err, doc, lastErrorObject) {
    //     console.log("put: ", doc);
    //     res.json(doc);
    // });
    // res.send("OK");
});

app.delete("/api/sighting", function(req, res) {
    console.log("delete: ", req.query);
    db.sightings.remove(req.query, function(err, doc) {
        console.log("delete: err: ", err, " doc: ", doc);
        if (err) {
            res.status(500).json(error);
        } else {
            res.send(doc);
        }
    });
    // res.send("OK");
});


var server = app.listen(nodePort, function() {
    console.log("Listening at address", server.address());
});
