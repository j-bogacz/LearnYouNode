var fs = require("fs");

var buffer = fs.readFile(process.argv[2], "utf8", function (error, result) {
	if (!error) {
		var splitBuffer = result.split("\n");
		
		var noOfNewLines = splitBuffer.length - 1;
		
		console.log(noOfNewLines);
	}
	else {
		console.error(error);
	}
});