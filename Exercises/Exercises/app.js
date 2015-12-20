var fs = require("fs");
var path = require("path");
var filter = process.argv[3];
//var _ = require("underscore");

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

		// Alternative soluntion
		//_(filelist).each(function (f) {
		//	console.log(f);
		//});

		// Alternative solution
		//filelist.forEach(function (f) {
		//	console.log(f);
		//});
	}
});