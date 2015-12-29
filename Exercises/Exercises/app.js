var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function (request, response) {
	if (request.method == 'GET') {
		var parsedUrl = url.parse(request.url, true);
		
		var pathName = parsedUrl.pathname;
		var query = parsedUrl.query;
		
		for (var element in query) {
			if (element === "iso") {
				var queryString = query[element];
				
				if (parsedUrl.pathname === "/api/parsetime") {
					var parsedTime = new Date(queryString);
					var time = {
						hour: parsedTime.getHours(),
						minute: parsedTime.getMinutes(),
						second: parsedTime.getSeconds()
					};

					response.end(JSON.stringify(time));
				}
				if (parsedUrl.pathname === "/api/unixtime") {
					var unixTime = {
						unixtime: (new Date(queryString)).getTime()
					};
					
					response.end(JSON.stringify(unixTime));
				}
			}
		}
	}
	response.end("You must use API");
});

server.listen(port);