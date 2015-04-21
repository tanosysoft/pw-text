#!/usr/bin/env iojs
"use strict";
var q = require('q');
var tw = require('./lib/typewriter');
q.spawn(function*() {
	tw.clear();
	yield tw.type({d:100}, "August 3, 9:47 AM", {w:500});
	yield tw.type("District Court");
	yield tw.type("Defendant Lobby No. 2", {w:2000});
	yield tw.breakLine();
	yield tw.type({who:"Phoenix"}, {dh:true}, {d:30}, "(Boy am I nervous!)", {w:1500});
	yield tw.breakLine();
	yield tw.type({who:"Mia"}, {dh:true}, {d:40}, "Wright!", {w:1250});
	yield tw.type({di:true}, {d:50}, "Did you", {w:1000}, {d:0}, " ", {d:30}, "turn off the lights?", {w:1000});
	yield tw.type({di:true}, {d:400}, ". . .", {w:1000});
	yield tw.type({di:true}, {d:40}, "I can't see a thing!", {w:1000});
	yield tw.breakLine();
	process.exit();
});
