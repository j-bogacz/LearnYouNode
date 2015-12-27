var http = require("http");
var bl = require("bl");

var responseCount = 0;
var responses = ["", "", ""];

http.get(process.argv[2], function (response) {
	response.setEncoding("utf8");
	response.pipe(bl(function (err, data) {
		responses[0] = data;
		responseCount++;
		if (responseCount === 3) {
			printResult();
		}
	}));
});

http.get(process.argv[3], function (response) {
	response.setEncoding("utf8");
	response.pipe(bl(function (err, data) {
		responses[1] = data;
		responseCount++;
		if (responseCount === 3) {
			printResult();
		}
}));
});

http.get(process.argv[4], function (response) {
	response.setEncoding("utf8");
	response.pipe(bl(function (err, data) {
		responses[2] = data;
		responseCount++;
		if (responseCount === 3) {
			printResult();
		}
	}));
});

function printResult() {
	responses.forEach(function (response) {
		console.log(response.toString());
	});
}