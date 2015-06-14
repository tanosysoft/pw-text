'use strict';
var Q = require('q');
var cli = require('./lib/novel-cli');
var theFirstTurnabout = require('./the-first-turnabout');
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
	yield cli.choice ({
		"New Game": Q.async(function*() {
			yield theFirstTurnabout();
		}),
		"Continue": Q.async(function*() {
			yield cli.paragraph({d:0}, "Booo! Not implemented! :(");
			return false;
		}),
		"Quit": Q.async(function*() {
			yield cli.breakLine();
			process.exit();
		}),
	});
});
