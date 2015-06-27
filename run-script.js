#!/usr/bin/env iojs
'use strict';
let fs = require('fs');
let commandQueue = require('chain/command-queue');
let io = require('chain/io');
commandQueue.registerCommandHandlers(io);
commandQueue.push({'no-skip':true});
let compile = require('chain/compile-script');
let latestScript;
let scriptStack = [];
exports = module.exports = function(path, more) {
	more = more || {};
	let script = compile (
		fs.readFileSync(path, { encoding: 'utf8' })
	);
	script.runFile = function() {
		exports.apply(this, arguments).done();
		this.exit();
	};
	script.return = function() {
		let previousScript = scriptStack.pop();
		if(!previousScript) {
			throw new Error("Can't return: The script stack is empty");
		}
		this.exit();
		latestScript = previousScript.script;
		previousScript.script.run(previousScript.returnLabel);
	};
	if(more.returnLabel) {
		if(!latestScript) {
			throw new Error("Return label specified, but no script is running");
		}
		scriptStack.push ({
			script: latestScript,
			returnLabel: more.returnLabel,
		});
	}
	latestScript = script;
	return script.run(more.startingLabel);
};
if(!module.parent) {
	exports(process.argv[2], {
		startingLabel: process.argv[3]
	}).done();
}
