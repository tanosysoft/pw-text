'use strict';
var Q = require('q');
var tw = require('./lib/typewriter');
module.exports = Q.async(function*() {
	yield tw.clear();
	yield tw.paragraph ([
		[{d:30}, "Phoenix Wright"],
		["Ace Attorney"],
	]);
	yield tw.paragraph ([
		[" - New Game"],
		[" - Continue"],
	]);
	yield tw.choice ([
		{
			matcher: /^New Game$/i,
			fn: Q.async(function*() {
				yield tw.paragraph({d:30}, "Nyuu geemu desu!");
			}),
		},
		{
			matcher: /^Continue$/i,
			fn: Q.async(function*() {
				yield tw.paragraph({d:30}, "Konchinyuu desu!");
			}),
		},
		{
			matcher: 'default',
			fn: Q.async(function*() {
				yield tw.paragraph({d:0}, "?");
				return false;
			}),
		}
	]);
	process.exit();
});