#!/usr/bin/env node
"use strict";
var tw = require('./lib/typewriter');
tw.clear();
tw.type({d:100}, "August 3, 9:47 AM", {w:500});
tw.type("District Court");
tw.type("Defendant Lobby No. 2", {w:2000});
tw.breakLine();
tw.type({who:"Phoenix"}, {dh:true}, {d:30}, "(Boy am I nervous!)", {w:1500});
tw.breakLine();
tw.type({who:"Mia"}, {dh:true}, {d:40}, "Wright!", {w:1250});
tw.type({di:true}, {d:50}, "Did you", {w:1000}, {d:0}, " ", {d:30}, "turn off the lights?", {w:1000});
tw.type({di:true}, {d:400}, ". . .", {w:1000});
tw.type({di:true}, {d:40}, "I can't see a thing!", {w:1000});
tw.breakLine().then(function() {
	process.exit();
});
