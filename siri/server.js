var http = require("http");

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.",
    "new message", "another new message"
];
var port = 8887;


// var server = http.createServer();

// server.listen(port, function() {
// });

// server.on("request", function(request, response) {
// 	console.log("request", request, "response", response);
// 	var result = {message: 'moikka'};
// 	response.setHeader("Connect-Type", "application/json; charset=utf-8")
// 	response.write(JSON.stringify(result));
// 	response.end();
// });

var randomNumberZeroToThis = function(num) {
    return Math.floor(Math.random() * messages.length);
};


var onrequest = function(req, resp) {
    resp.statusCode = 200;

    resp.setHeader('Content-Type', 'application/json');

    // Allow any website to access this API
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Don’t allow scripts or iframes execution from domains we don't trust
    resp.setHeader('X-XSS-Protection', '1; mode=block');
    resp.setHeader('X-Frame-Options', 'SAMEORIGIN');
    resp.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");

    if (req.method === "GET") {
        var index = randomNumberZeroToThis(messages.length);
        var msg = {
            index: index,
            message: messages[index]
        };
        // resp.end(JSON.stringify(msg));

        // OLD WAY TO DO THIS
        // resp.writeHead(200, {
        //     'Connection': 'close',
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        // });

        resp.write(JSON.stringify(msg));
        resp.end();
    } else if (req.method === "OPTIONS") {
        resp.end();
    }
};

http.createServer(onrequest).listen(port, function() {
    console.log("listening to port: ", port);
});
