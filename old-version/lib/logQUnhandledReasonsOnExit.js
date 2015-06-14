'use strict';
var q = require('q');
process.on('exit', function() {
	q.getUnhandledReasons().forEach(function(reason) {
		console.error("The follwing promise rejection reason went unhandled:");
		console.error(reason);
	});
});
