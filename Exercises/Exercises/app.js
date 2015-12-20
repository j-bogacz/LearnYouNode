var myModule = require("./myModule.js");

myModule(process.argv[2], process.argv[3], function (error, data) {
	if (error) {
		console.error(error);
	}
	else {
		data.forEach(function (item) {
			console.log(item);
		});
	}
});