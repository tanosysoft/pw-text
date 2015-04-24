'use strict';
var Q = require('q');
var cli = require('./lib/novel-cli');
var theFirstTurnabout = require('./the-first-turnabout.js');
module.exports = Q.async(function*() {
	yield cli.clear();
	yield cli.paragraph ([
		[{d:30}, "Phoenix Wright"],
		["Ace Attorney"],
	]);
	yield cli.paragraph ([
		[" - New Game"],
		[" - Continue"],
		[" - Quit"],
	]);
	yield cli.choice ([
		{
			matcher: /^New Game$/i,
			fn: Q.async(function*() {
				yield theFirstTurnabout();
			}),
		},
		{
			matcher: /^Continue$/i,
			fn: Q.async(function*() {
				yield cli.paragraph({d:0}, "Booo! Not implemented! :(");
				return false;
			}),
		},
		{
			matcher: /^Quit$/i,
			fn: Q.async(function*() {
				yield cli.breakLine();
				process.exit();
			}),
		},
	]);
});
