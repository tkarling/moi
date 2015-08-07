var http = require("http");

var messages = [{message: "message 1"}, {message: "message 2"}];

var port = 8886;


var setHeader = function(res) {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json');

    // Allow any website to access this API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Don’t allow scripts or iframes execution from domains we don't trust
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");
}

var setOptionsHeader = function(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
};

var onRequest = function(req, res) {
    if (req.method === "GET") {
        setHeader(res);
        res.write(JSON.stringify(messages));
        res.end();
    } else if (req.method === 'POST') {
        var postData = '';
        req.on('data', function(chunk) {
            postData += chunk.toString();
        });
        req.on('end', function() {
            console.log(postData);
            var newItem = JSON.parse(postData);
            newItem.time = new Date().getTime
            messages.push(newItem);
            console.log("Got POST data:");
            setHeader(res);
            res.write(JSON.stringify(messages));
            res.end();
        });
    } else if (req.method === "OPTIONS") {
            setOptionsHeader(res);
            res.end();        
    }
};

var server = http.createServer(onRequest)
server.listen(port, function() {
    console.log("listening in address: ", server.address());
});
