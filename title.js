'use strict';
var Q = require('q');
var tw = require('./lib/typewriter');
var theFirstTurnabout = require('./the-first-turnabout.js');
module.exports = Q.async(function*() {
	yield tw.clear();
	yield tw.paragraph ([
		[{d:30}, "Phoenix Wright"],
		["Ace Attorney"],
	]);
	yield tw.paragraph ([
		[" - New Game"],
		[" - Continue"],
		[" - Quit"],
	]);
	yield tw.choice ([
		{
			matcher: /^New Game$/i,
			fn: Q.async(function*() {
				yield theFirstTurnabout();
			}),
		},
		{
			matcher: /^Continue$/i,
			fn: Q.async(function*() {
				yield tw.paragraph({d:0}, "Booo! Not implemented! :(");
				return false;
			}),
		},
		{
			matcher: /^Quit$/i,
			fn: Q.async(function*() {
				yield tw.breakLine();
				process.exit();
			}),
		},
		{
			matcher: 'default',
			fn: Q.async(function*() {
				yield tw.paragraph({d:0}, "?");
				return false;
			}),
		},
	]);
});
