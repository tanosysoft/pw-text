#!/usr/bin/env iojs
"use strict";
var Q = require('q');
var tw = require('./lib/typewriter');
require('./lib/logQUnhandledReasonsOnExit');
Q.spawn(function*() {
	tw.clear();
	yield tw.paragraph ([
		[{d:100}, "August 3, 9:47 AM", {w:500}],
		["District Court"],
		["Defendant Lobby No. 2", {w:2000}],
	]);
	yield tw.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:30}, "(Boy am I nervous!)", {w:1500}],
	]);
	yield tw.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "Wright!", {w:1250}],
		[{di:true}, {d:50}, "Did you", {w:1000}, {d:0}, " ", {d:30}, "turn off the lights?", {w:1000}],
		[{di:true}, {d:400}, ". . .", {w:1000}],
		[{di:true}, {d:40}, "I can't see a thing!", {w:1000}],
	]);
	process.exit();
});
