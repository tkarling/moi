'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var messages = [{
    message: "message 1"
}, {
    message: "message 3"
}];


app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function(req, res) {
    res.send(JSON.stringify(messages));
});

app.post('/', function(req, res) {
    messages.push(req.body);
    res.send(JSON.stringify(messages));
});

app.put('/api/person/:id', function(req, res) {
    var ourId = req.params.id;
    res.send("Your id is " + ourId);
});


app.options('/', function(req, res) {
    res.send();
});

app.listen(8585);







// var http = require("http");

// var messages = [{message: "message 1"}, {message: "message 2"}];

// var port = 8886;


// var setHeader = function(res) {
//     res.statusCode = 200;

//     res.setHeader('Content-Type', 'application/json');

//     // Allow any website to access this API
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//     // Don’t allow scripts or iframes execution from domains we don't trust
//     res.setHeader('X-XSS-Protection', '1; mode=block');
//     res.setHeader('X-Frame-Options', 'SAMEORIGIN');
//     res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");
// }

// var setOptionsHeader = function(res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// };

// var onRequest = function(req, res) {
//     if (req.method === "GET") {
//         setHeader(res);
//         res.write(JSON.stringify(messages));
//         res.end();
//     } else if (req.method === 'POST') {
//         var postData = '';
//         req.on('data', function(chunk) {
//             postData += chunk.toString();
//         });
//         req.on('end', function() {
//             console.log(postData);
//             var newItem = JSON.parse(postData);
//             newItem.time = new Date().getTime
//             messages.push(newItem);
//             console.log("Got POST data:");
//             setHeader(res);
//             res.write(JSON.stringify(messages));
//             res.end();
//         });
//     } else if (req.method === "OPTIONS") {
//             setOptionsHeader(res);
//             res.end();        
//     }
// };

// var server = http.createServer(onRequest)
// server.listen(port, function() {
//     console.log("listening in address: ", server.address());
// });
