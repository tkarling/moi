'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

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



app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/name', function(req, res) {
    res.send(me.name);
});

app.put('/name/:name', function(req, res) {
    me.name = req.params.name;
    res.send(me.name);
});


app.get('/location', function(req, res) {
    res.send(me.location);
});

app.put('/location/:location', function(req, res) {
    me.location = req.params.location;
    res.send(me.location);
});


app.get('/hobbies', function(req, res) {
    // ?order=desc, ?order=asc
    console.log("/hobbies", req.params, req.query);
    if (req.query.order === "desc") {
        hobbies.sort();
    } else if (req.query.order === "asc") {
        hobbies.sort();
        hobbies.reverse();
    }
    res.send(JSON.stringify(hobbies));
});

app.post('/hobbies', function(req, res) {
    hobbies.push(req.body.hobby);
    res.send(JSON.stringify(hobbies));
});


app.get('/occupations', function(req, res) {
    // ?order=desc, ?order=asc
    if (req.query.order === "desc") {
        occupations.sort();
    } else if (req.query.order === "asc") {
        occupations.sort();
        occupations.reverse();
    }
    res.send(JSON.stringify(occupations));
});

app.get('/occupations/latest', function(req, res) {
    res.send(me.latestOccupation);
});

app.post('/occupations', function(req, res) {
    occupations.push(req.body.occupation);
    res.send(JSON.stringify(occupations));
});

app.put('/occupations/latest/:occupation', function(req, res) {
    me.latestOccupation = req.params.occupation;
    res.send(me.latestOccupation);
});

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


app.get('/skills', function(req, res) {
    // ?experience=Intermediate
    console.log("/skills", req.params, req.query);
    res.send(JSON.stringify(getSelectedSkills(req.query.experience)));
});

app.post('/skills', function(req, res) {
    skills.push(req.body);
    res.send(JSON.stringify(skills));
});

// app.options('/', function(req, res) {
//     res.send();
// });

var port = 8686;
app.listen(port, function() {
    console.log("listening at port", port);
});






