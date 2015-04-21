#!/usr/bin/env node
"use strict";
var clear = require('clear');
var tw = require('./lib/typewriter');
clear();
tw.type({d:100});
tw.type("August 3, 9:47 AM", {w:500}, "\n");
tw.type("District Court\n");
tw.type("Defendant Lobby No. 2\n");
tw.type({w:2000}, "\n");
tw.typeSpeech("Phoenix", [
	[{d:30}, "(Boy am I nervous!)", {w:1500}]
]);
tw.type({d:0}, "\n");
tw.typeSpeech("Mia", [
	[{d:100}, "Wright!", {w:1250}],
	[{d:80}, "Did you", {w:500}, {d:40}, " turn off the lights?", {w:1000}],
	[{d:500}, ". . .", {w:1000}],
	[{d:40}, "I can't see a thing!", {w:1000}],
]);
tw.type({d:0}, "\n").then(function() {
	process.exit();
});
