var fs = require("fs");
var path = require("path");

module.exports = function (dirPath, filter, callback) {
	fs.readdir(dirPath, function (error, fileList) {
		if (error) {
			return callback(error);
		}
		
		var filteredFiles = fileList.filter(function (element) {
			return path.extname(element) === "." + filter;
		});

		callback(null, filteredFiles);
	});
};