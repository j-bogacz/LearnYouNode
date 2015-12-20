var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);

var bufferAsString = buffer.toString();

var splitBuffer = bufferAsString.split("\n");

var noOfNewLines = splitBuffer.length - 1;

console.log(noOfNewLines);