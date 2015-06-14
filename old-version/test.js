#!/usr/bin/env iojs
"use strict";
var Q = require('q');
var cli = require('./lib/novel-cli');
require('./lib/logQUnhandledReasonsOnExit');
Q.spawn(function*() {
	cli.clear();
	yield cli.paragraph ([
		[{d:100}, "August 3, 9:47 AM", {w:500}],
		["District Court"],
		["Defendant Lobby No. 2", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:30}, "(Boy am I nervous!)", {w:1500}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "Wright!", {w:1250}],
		[{di:true}, {d:50}, "Did you", {w:1000}, {d:0}, " ", {d:30}, "turn off the lights?", {w:1000}],
		[{di:true}, {d:400}, ". . .", {w:1000}],
		[{di:true}, {d:40}, "I can't see a thing!", {w:1000}],
	]);
	process.exit();
});