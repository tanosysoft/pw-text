'use strict';
var Q = require('q');
var tw = require('./lib/typewriter');
module.exports = Q.async(function*() {
	yield tw.clear();
	yield tw.paragraph ([
		[{d:40}, "Episode 1"],
		["The First Turnabout"],
	]);
	yield tw.paragraph ([
		[{d:30}, " - Back"],
		[" - Confirm"],
	]);
	yield tw.choice ([
		{
			matcher: /^Back$/i,
			fn: Q.async(function*() {
				return;
			}),
		},
		{
			matcher: /^Confirm$/i,
			fn: Q.async(function*() {
				yield tw.paragraph({d:0}, "Booo! Not implemented! :(");
				return false;
			}),
		},
	]);
});
