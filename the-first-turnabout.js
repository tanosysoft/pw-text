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
		"Back": null,
		"Confirm": Q.async(function*() {
			yield episodeBody();
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
	yield cli.clear();
	yield cli.wait(2000);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "My name is Phoenix Wright.", {w:1000}, " Here's the story:", {w:1000}],
		[{di:true}, "My first case is a fairly simple one.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, "A young woman was killed in her apartment.", {w:1000}],
		[{di:true}, "The guy they arrested was the unlucky sap dating her:", {w:500}],
		[{di:true}, "Larry Butz...", {w:1000}, " my best friend since grade school.", {w:1500}],
	]);
	yield cli.paragraph ([
		[{di:true}, "Our school had a saying:", {w:1000}],
		[{di:true}, "\"When something smells,", {w:500}, " it's usually the Butz.\"", {w:2000}],
		[{di:true}, "In the 23 years I've known him,", {w:250}, " it's usually been true.", {w:1000}],
		[{di:true}, "He has a knack for getting himself in trouble.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, "One thing I can say though:", {w:1000}, " it's usually not his fault.", {w:500}],
		[{di:true}, "He just has terrible luck.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, {id:10}, "But I know better than anyone", {w:250}, " that he's a good guy at heart.", {w:1000}],
		[{di:true}, "That and I owe him one.", {w:250}, " Which is why I took the case...", {w:1000}],
		[{di:true}, "to clear his name.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{di:true}, "And that's just what I'm going to do!", {w:3000}],
	]);
	yield cli.clear();
	yield cli.wait(2000);
	yield cli.paragraph ([
		[{d:100}, "August 3, 10:00 AM", {w:500}],
		["District Court"],
		["Courtroom No. 2", {w:2000}],
	]);
	yield cli.paragraph ([
		[{d:80}, "The room is still filled with chatter from the audience"],
		["as the judge prepares for the session.", {w:2000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:0}, "*Bang!*", {w:1000}],
		[{di:true}, {d:60}, "The court is now in session for the trial of Mr. Larry Butz.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Payne"}, {dh:true}, {d:45}, "The prosecution is ready,", {w:150}, " Your Honor.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "The,", {w:250}, " um,", {w:500}, " defense is ready,", {w:250}, " Your Honor.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:20}, "Ahem.", {w:500}],
		[{di:true}, {d:60}, "Mr. Wright?", {w:1000}, " This is your first trial, is it not?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "Y-", {w:250}, "Yes,", {w:250}, " Your Honor.", {w:500}],
		[{di:true}, "I'm,", {w:150}, " um,", {w:250}, {id:30}, " a little nervous.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:40}, "Your conduct during this trial will decide the fate of your client.", {w:1000}],
		[{di:true}, "Murder is a serious charge.", {w:1000}],
		[{di:true}, "For your client's sake,", {w:150}, " I hope you can control your nerves.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:60}, "Thank...", {w:500}, " thank you,", {w:250}, " Your Honor.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:60}, "...", {w:1500}],
		[{di:true}, {d:40}, "Mr. Wright,", {w:250}, " given the circumstances...", {w:1000}],
		[{di:true}, "I think we should have a test to ascertain your readiness.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "Yes, Your Honor.", {w:1000}],
		[{di:true}, {d:65}, "(Gulp...", {w:750}, " Hands", {w:500}, " shaking...",
			{w:750}, " Eyesight", {w:500}, "... fading...)", {w:1000}],
	]);
	yield cli.type ([
		[{who:"Judge"}, {dh:true}, {d:40}, "The test will consist of a few simple questions.", {w:1000}],
		[{di:true}, "Answer them clearly and concisely.", {w:1000}],
	]);
	yield cli.choice(Q.async(function*() {
		yield cli.paragraph ([
			[{di:true}, "Please state the name of the defendant in this case.", {w:500}],
		]);
		yield cli.paragraph ([
			[{d:40}, " - Phoenix Wright"],
			[" - Larry Butz"],
			[" - Mia Fey"],
		]);
	}), {
		"Phoenix Wright": Q.async(function*() {
			yield cli.breakLine();
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:60}, "Um...", {w:500}, " the defendant...", {w:250}, " is me,", {w:250}, " right?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:20}, "Wright!", {w:500}, " Have you completely lost your mind?", {w:500}, " Focus!", {w:1000}],
				[{di:true}, {d:40}, "The defendant is the person on trial!", {w:1000}],
				[{di:true}, "You're his lawyer!", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:40}, "Um,", {w:150}, " er,", {w:250}, " eh?", {w:1000}],
				[{di:true}, "Oh yeah,", {w:250}, " right!", {w:500}, " Eh heh heh.", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:40}, "This is no laughing matter!", {w:1000}],
				[{di:true}, "You did pass the bar, didn't you?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{d:100}, "The judge shakes his head, negatively.", {w:1000}],
			]);
			yield cli.type ([
				[{who:"Judge"}, {dh:true}, {d:60}, "Sorry,", {w:250}, " I couldn't hear your answer.", {w:500},
					" I'll ask once more.", {w:1000}],
			]);
			return false;
		}),
		"Larry Butz": Q.async(function*() {
			yield cli.breakLine();
		}),
		"Mia Fey": Q.async(function*() {
			yield cli.breakLine();
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:50}, "The,", {w:250}, " um,", {w:250}, " defendant?", {w:1000}],
				[{di:true}, {d:100}, "That's...", {w:500}, " er...", {w:500}, {d:60}, " Mia Fey?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:50}, "Wrong,", {w:250}, " Wright.", {w:500}],
				[{di:true}, "Look,", {w:250}, " I have to leave.", {w:1000}],
				[{di:true}, "I have to go home.", {w:250}, " I'm...", {w:500}, " I'm expecting a delivery.", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:60}, "Aw, c'mon, Chief.", {w:750}],
				[{di:true}, "There's no need to be going so soon,", {w:250}, " is there?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:10}, "Wright!", {w:1000}],
				[{di:true}, {d:40}, "Listen:", {w:250}, " the defendant is the one on trial", {w:250}, "--your client!", {w:1000}],
				[{di:true}, {d:60}, "I mean,", {w:250}, " that's about as basic as you can get!", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:60}, "(I put my foot in it this time!", {w:500}, " I've got to relax!)", {w:1000}],
			]);
			yield cli.paragraph ([
				[{d:100}, "The judge shakes his head, negatively.", {w:1000}],
			]);
			yield cli.type ([
				[{who:"Judge"}, {dh:true}, {d:60}, "Sorry,", {w:250}, " I couldn't hear your answer.", {w:500},
					" I'll ask once more.", {w:1000}],
			]);
			return false;
		}),
	});
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "The defendant?", {w:750}, " Well,", {w:250}, " that's Larry Butz,",
			{w:250}, " Your Honor.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "The judge nods.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:50}, "Correct.", {w:1000}, " Just keep your wits about you and you'll do fine.", {w:1000}],
		[{di:true}, "Next question:", {w:1000}],
		[{di:true}, "This is a murder trial.", {w:250}, " Tell me,", {w:250}, " what's the victim's name?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "(Whew,", {w:500}, " I know this one!", {w:1000}, " Glad I read the case report cover to cover"],
		[{di:true}, "so many times.", {w:2000}, " It's...", {w:500}, " wait", {w:500}, "... Uh-oh!", {w:1000}],
		[{di:true}, {d:30}, "No...", {w:250}, " no way!", {w:500}, " I forgot!", {w:750}, " I'm drawing a total blank here!)", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:40}, "Phoenix!", {w:500}, " Are you absolutely SURE you're up to this?", {w:1000}],
		[{di:true}, "You don't even know the victim's name!?", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:40}, "Oh, the victim!", {w:500}, " O-", {w:250}, "Of course I know the victim's name!", {w:1000}],
		[{di:true}, {d:50}, "I, um,", {w:250}, " just forgot.", {w:1000}],
		[{di:true}, "... Temporarily.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Mia"}, {dh:true}, {d:60}, "I think I feel a migraine coming on.", {w:1000}],
		[{di:true}, {d:40}, "Look,", {w:500}, " the defendant's name is listed in the Court Record.", {w:1000}],
		[{di:true}, "Just type 'Court Record' to check it at anytime, okay?", {w:1000}],
		[{di:true}, "Remember to check it often.", {w:500}, " Do it for me,", {w:250}, " please.", {w:1000}],
		[{di:true}, "I'm begging you.", {w:1000}],
	]);
	yield cli.choice(Q.async(function*() {
		if(cli.interlocutor() !== "Judge") {
			yield cli.typePart({who:"Judge"}, {dh:true});
		}
		else {
			yield cli.typePart({di:true});
		}
		yield cli.paragraph ([
			[{d:50}, "Let's hear your answer.", {w:1000}, " Who is the victim in this case?", {w:1000}],
		]);
		yield cli.paragraph ([
			[{d:40}, " - Mia Fey"],
			[" - Cinder Block"],
			[" - Cindy Stone"],
		]);
	}), {
		"Mia Fey": Q.async(function*() {
			yield cli.breakLine();
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:60}, "Um...", {w:500}, " Mia Fey?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:40}, "W-", {w:500}, "W-", {w:500}, "What!?", {w:1000}],
				[{di:true}, "How can I be the victim!?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:30}, "Oh!", {w:250}, " Right!", {w:250}, " Sorry!", {w:1000}, " I,", {w:250}, " er,", {w:250}],
				[{di:true}, "it was the first name that popped into my head, and--", {w:750}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:40}, "The Court Record!", {w:1000}],
				[{di:true}, "Remember to use it when you are in a pinch.", {w:1000}],
			]);
			yield cli.type ([
				[{who:"Judge"}, {dh:true}, {d:60}, "Let me ask that one again:", {w:1000}],
			]);
			return false;
		}),
		"Cinder Block": Q.async(function*() {
			yield cli.breakLine();
			yield cli.paragraph ([
				[{who:"Phoenix"}, {dh:true}, {d:40}, "Oh,", {w:250}, " um,", {w:500}, " wasn't it Ms. Block?", {w:1000}],
				[{di:true}, "Ms. Cinder Block?", {w:1000}],
			]);
			yield cli.paragraph ([
				[{d:100}, "The judge shakes his head, negatively.", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Judge"}, {dh:true}, {d:60}, "The person in question was a victim of murder,", {w:250}],
				[{di:true}, "not ill-conceived naming,", {w:250}, " Mr. Wright.", {w:1000}],
			]);
			yield cli.paragraph ([
				[{who:"Mia"}, {dh:true}, {d:40}, "Wright?", {w:1000}, " If your forget something,", {w:250}],
				[{di:true}, "just type 'Court Record' to help you remember.", {w:1000}],
				[{di:true}, "A mistake in court could cost you the case.", {w:1000}],
			]);
			yield cli.type ([
				[{who:"Judge"}, {dh:true}, {d:60}, "I'll ask you again:", {w:1000}],
			]);
			return false;
		}),
		"Cindy Stone": Q.async(function*() {
			yield cli.breakLine();
		}),
	});
	yield cli.paragraph ([
		[{who:"Phoenix"}, {dh:true}, {d:50}, "Um...", {w:250}, " the victim's name is Cindy Stone.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{d:100}, "The judge nods.", {w:1000}],
	]);
	yield cli.paragraph ([
		[{who:"Judge"}, {dh:true}, {d:50}, "Correct.", {w:1000}],
	]);
	process.exit();
});
if(!module.parent) {
	episodeBody();
}
