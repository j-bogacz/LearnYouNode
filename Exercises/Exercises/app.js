var fs = require("fs");
var path = require("path");
var filter = process.argv[3];

fs.readdir(process.argv[2], function (error, filelist) {
	if (error) {
		console.error(error);
		return;
	}
	
	for (var fileIndex in filelist) {
		var file = filelist[fileIndex];

		var ext = path.extname(file);
		if (ext.slice(1, ext.l) === filter) {
			console.log(file);
		}
	}
});