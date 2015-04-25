'use strict';
var Q = require('q');
var cli = require('./lib/novel-cli');
module.exports = Q.async(function*() {
	yield cli.clear();
	yield cli.paragraph ([
		[{d:40}, "Episode 1"],
		["The First Turnabout"],
	]);
	yield cli.paragraph ([
		[{d:30}, " - Back"],
		[" - Confirm"],
	]);
	yield cli.choice ({
		"Back": Q.async(function*() {
			return;
		}),
		"Confirm": Q.async(function*() {
			yield cli.paragraph({d:0}, "Booo! Not implemented! :(");
			return false;
		}),
	});
});
