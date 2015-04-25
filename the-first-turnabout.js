#!/usr/bin/env node
'use strict';
var Q = require('q');
var cli = require('./lib/novel-cli');
var episodeBody;
module.exports = Q.async(function*() {
	yield cli.clear();
	yield cli.paragraph ([
		[{d:40}, "Episode 1"],
		["The First Turnabout"],
	]);
	yield cli.paragraph ([
		[{d:30}, " - Back"],
		[" - Confirm"],
	]);
	yield cli.choice ({
		"Back": Q.async(function*() {
			return;
		}),
		"Confirm": Q.async(function*() {
			yield episodeBody();
			return false;
		}),
	});
});
episodeBody = Q.async(function*() {
	yield cli.clear();
	yield cli.wait(1000);
	yield cli.paragraph ([
		[{d:0}, "Episode 1", {w:1000}],
		["The First Turnabout", {w:3000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "Inside the compressing walls of a small apartment, blood"],
		["runs all over a small statue held upside-down by a man.", {w:1000}],
	]);
	yield cli.paragraph ([
		["Blood drips from it to the wooden floor beside a fine lady's dead body.", {w:3000}],
	]);
	yield cli.paragraph ([
		[{who:null}, {dh:true}, {d:30}, "*gasp*...", {w:750}, " *gasp*...", {w:1500}],
		[{di:true}, {d:10}, "Dammit!", {w:1250}],
		[{di:true}, {d:300}, ". . .", {w:1000}, {d:30}, " Why me?", {w:2000}],
		[{di:true}, {d:50}, "I can't get caught...", {w:1500}],
		[{di:true}, {d:10}, "Not like this!", {w:2000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "Shocked, the murderer stares at the woman he just killed.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Murderer"}, {dh:true}, {d:60}, "I-", {w:500}, "I've gotta find someone to pin this on...", {w:2000}],
		[{di:true}, {d:40}, "Someone like...", {w:1000}, {d:10}, " him!", {w:2000}],
		[{di:true}, {d:60}, "I'll make it look like HE did it!", {w:2000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "The horror in his face fades into an evil grin as he plots his next move...", {w:2000}],
	]);
	process.exit();
});
if(!module.parent) {
	episodeBody();
}
