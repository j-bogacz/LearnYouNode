var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var uri = process.argv[3];

var server = http.createServer(function (request, response) {
	stream = fs.createReadStream(uri);
	stream.pipe(response);
});

server.listen(port);