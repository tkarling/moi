'use strict';
var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var server = http.createServer();
var staticServer = express.static(__dirname + '/public');
var app = express();

app.use("/", staticServer);
app.use("/", bodyParser.json());
app.use("/", cors());


// NOTE use cors or following to make e.g. chrome work
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     if("OPTIONS" === req.method) {
//         res.send(200);
//     } else {
//         next();
//     }
// }
// app.use("/", allowCrossDomain);
// OR headers from above & following
// app.options('/', function(req, res) {
//     res.send();
// });


// DATA =========
var hobbies = ["hiking", "reading", "puzzles"];
var occupations = ["Project Manager", "SW Team Lead", "Customer Trainer", "SW developer"];
var skills = [{
    id: 1,
    name: 'Javascript',
    experience: 'Intermediate'
}, {
    id: 2,
    name: 'Html',
    experience: 'Intermediate'
}, {
    id: 3,
    name: 'CSS',
    experience: 'Beginner'
}];


var me = {
    name: "Tuija",
    location: "San Diego, CA",
    latestOccupation: occupations[0]
};
// END DATA =========

// name
app.get('/api/name', function(req, res) {
    res.send(me.name);
});

app.put('/api/name/:name', function(req, res) {
    me.name = req.params.name;
    res.send(me.name);
});


// location
app.get('/api/location', function(req, res) {
    res.send(me.location);
});

app.put('/api/location/:location', function(req, res) {
    me.location = req.params.location;
    res.send(me.location);
});


function adSort(arr, order) {
    if (order === "asc") {
        arr.sort();
    } else if (order === "desc") {
        arr.sort().reverse();
    }    
};

// hobbies
app.get('/api/hobbies', function(req, res) {
    // ?order=desc, ?order=asc
    console.log("/hobbies", req.params, req.query);
    adSort(hobbies, req.query.order);
    res.json(hobbies);
    // res.send(JSON.stringify(hobbies));
});

app.post('/api/hobbies', function(req, res) {
    hobbies.push(req.body.hobby);
    res.json(hobbies);
    // res.send(JSON.stringify(hobbies));
});


// occupations
app.get('/api/occupations', function(req, res) {
    // ?order=desc, ?order=asc
    adSort(occupations, req.query.order);
    // if (req.query.order === "desc") {
    //     occupations.sort();
    // } else if (req.query.order === "asc") {
    //     occupations.sort();
    //     occupations.reverse();
    // }
    res.json(occupations);
    // res.send(JSON.stringify(occupations));
});

app.post('/api/occupations', function(req, res) {
    occupations.push(req.body.occupation);
    res.json(occupations);
    // res.send(JSON.stringify(occupations));
});

app.get('/api/occupations/latest', function(req, res) {
    res.send(me.latestOccupation);
});

app.put('/api/occupations/latest/:occupation', function(req, res) {
    me.latestOccupation = req.params.occupation;
    res.send(me.latestOccupation);
});


// skills
function getSelectedSkills(experience) {
    if (experience) {
        var selectedSkills = [];
        for (var i = 0; i < skills.length; i++) {
            if (skills[i].experience === experience) {
                selectedSkills.push(skills[i]);
            }
        }
        return selectedSkills;
    } // else
    return skills;
}

app.get('/api/skills', function(req, res) {
    // ?experience=Intermediate
    console.log("/skills", req.params, req.query);
    res.json(getSelectedSkills(req.query.experience));
    // res.send(JSON.stringify(getSelectedSkills(req.query.experience)));
});

app.post('/api/skills', function(req, res) {
    skills.push(req.body);
    res.json(skills);
    // res.send(JSON.stringify(skills));
});



var port = 8686;

// following if API server only without serving html files
// app.listen(port, function() {
//     console.log("listening at port", port);
// });

server.on("request", app);

server.listen(port, function() {
    console.log("listening in address: ", server.address());
});






