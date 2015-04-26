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
		[{d:100}, "Inside the compressing walls of a small apartment,", {w:250}, " blood"],
		["runs all over a small statue held upside down by a man.", {w:1000}],
	]);
	yield cli.paragraph ([
		["The blood drips from it to the wooden floor beside a fine lady's"],
		[{id:100}, "dead body...", {w:3000}],
	]);
	yield cli.paragraph ([
		[{who:null}, {dh:true}, {d:30}, "*gasp*...", {w:750}, " *gasp*...", {w:1500}],
		[{di:true}, {d:10}, "Dammit!", {w:1250}],
		[{di:true}, {d:300}, ". . .", {w:1000}, {d:30}, " Why me?", {w:1500}],
		[{di:true}, {d:50}, "I can't get caught...", {w:1500}],
		[{di:true}, {d:10}, "Not like this!", {w:2000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "Shocked,", {w:250}, " the murderer stares at the woman he just killed.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Murderer"}, {dh:true}, {d:60}, "I-", {w:500}, "I've gotta find someone to pin this on...", {w:1500}],
		[{di:true}, {d:40}, "Someone like...", {w:1000}, {d:10}, " him!", {w:2000}],
		[{di:true}, {d:60}, "I'll make it look like HE did it!", {w:2000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "The horror in his face fades into an evil grin as he plots his next move...", {w:2000}],
	]);
	yield cli.clear();
	yield cli.wait(2000);
	yield cli.paragraph ([
		[{d:20}, "You can access the Court Record by typing that on any prompt.", {w:3000}],
	]);
	yield cli.clear();
	yield cli.wait(2500);
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
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:30}, "Oh,", {w:1000}, " h-", {w:500}, "hiya, Chief.", {w:1500}],
	]);
	yield cli.paragraph ([
		[{d:100}, "A gorgeous long-haired brunette wearing an impeccable, sexy black"],
		["work wear walks your way.", {w:1000}, " Casually,", {w:250}, " Mia crosses her arms.", {w:500}, " She looks"],
		["extremely mature and reliable.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "Whew,", {w:500}, " I'm glad I made it on time.", {w:2000}],
		[{di:true}, "Well,", {w:500}, " I have to say Phoenix,", {w:250}, " I'm impressed!", {w:1000}],
	]);
	yield cli.paragraph ([
		[{d:40}, "Mia smiles.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, "Not everyone takes on a murder trial right off the bat like this.", {w:500}],
		[{di:true}, "It says a lot about you...", {w:1000}, " and your client as well.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:80}, "Um...", {w:500}, {dd:10}, " thanks.", {w:1000}],
		[{di:true}, {d:40}, "Actually,", {w:500}, " it's because I owe him a favor.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "A favor?", {w:1000}],
		[{di:true}, "You mean, you knew the defendant before this case?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "Yes.", {w:1000}],
		[{di:true}, "Actually,", {w:500}, " I kind of owe my current job to him.", {w:1000}],
		[{di:true}, "He's one of the reasons I became an attorney.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "Well, that's news to me!", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "I want to help him out any way I can!", {w:750}],
		[{di:true}, "I just... really want to help him. I owe him that much.", {w:2500}],
	]);
	yield cli.paragraph ([
		[{who:null}, {dh:true}, {d:10}, "(It's over!", {w:500}, {d:60}, " My life,", {w:500},
			" everything,", {w:250}, " it's all over!)", {w:1000}],
	]);
	yield cli.paragraph ([
		[{d:60}, "An extremely noisy person just entered the lobby room, screaming.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:150}, "...", {w:2000}],
		[{di:true}, {d:40}, "Isn't that your client screaming over there?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:80}, "Yeah...", {w:1000}, {d:40}, " that's him.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:null}, {dh:true},
			{d:10}, "(Death!", {w:500}, " Despair!", {w:500}, {d:40}, " Ohhhh!", {w:1000},
			{d:30}, " I'm gonna do it,", {w:500}, " I'm gonna die!!!)", {w:1500}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:60}, "It sounds like he wants to die...", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:60}, "Um,", {w:500}, " yeah.", {w:1000}, {dd:20}, " *sigh*", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Butz"}, {dh:true}, {d:25}, "Nick!!!", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:60}, "Hey.", {w:500}, " Hey there,", {w:150}, " Larry.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Butz"}, {dh:true}, {d:20}, "Dude,", {w:250}, " I'm so guilty!!", {w:1000}],
		[{di:true}, "Tell them I'm guilty!!!", {w:1000}],
		[{di:true}, {dd:5}, "Gimme the death sentence!", {w:750}],
		[{di:true}, {id:5}, "I ain't afraid to die!", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "What!?", {w:500}, " What's wrong,", {w:150}, " Larry?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Butz"}, {dh:true}, {d:80}, "Oh,", {w:1000}, " it's all over...", {w:500}],
		[{di:true}, {id:20}, "I...", {w:500}, {dd:45}, " I'm finished.", {w:500}, {dd:40}, " Finished!", {w:1000}]
	]);
	yield cli.paragraph ([
		[{d:60}, "Butz sobs uncontrollably.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, {d:20}, "I can't live in a world without her!", {w:500}, " I can't!", {w:1000}],
		[{di:true}, {d:100}, "Who...", {w:500}, {dd:50}, " who took her away from me,", {w:150}, " Nick?", {w:1000}],
		[{di:true}, {d:30}, "Who did this!?", {w:1000}],
		[{di:true}, {d:150}, "Aww,", {w:250}, " Nick,", {w:500}, {d:60}, " ya gotta tell me!", {w:500}],
		[{di:true}, {d:40}, "Who took my baby away!?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:100}, "(Hmm...", {w:1000}, " The person responsible for your girlfriend's death?", {w:1000}],
		[{di:true}, "The newspapers say it was", {w:500}, " you...)", {w:3000}],
	]);
	process.exit();
});
if(!module.parent) {
	episodeBody();
}
