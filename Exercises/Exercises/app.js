var http = require("http");
var bl = require("bl");

var responseCount = 0;
var responses = [];

function httpGet(index) {
	http.get(process.argv[2 + index], function (response) {
		response.setEncoding("utf8");
		response.pipe(bl(function (err, data) {
			responses[index] = data;
			responseCount++;
			if (responseCount === 3) {
				printResult();
			}
		}));
	});
}

function printResult() {
	for (var i = 0; i < 3; i++) {
		console.log(responses[i].toString());
	}
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}