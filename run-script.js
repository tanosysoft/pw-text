#!/usr/bin/env iojs
'use strict';
let path = require('path');
let extname = path.extname;
let resolvePath = path.resolve;
let fs = require('fs');
require('array.prototype.find');
let _ = require('lodash');
let Q = require('q');
require('./global.game');
let commandQueue = require('chain/command-queue');
let io = require('chain/io');
commandQueue.registerCommandHandlers(io);
commandQueue.push({'no-skip':true});
let compile = require('chain/compile-script');
let latestScript;
let scriptStack = [];
let mixinFunctions;
exports = module.exports = function(path, more) {
	more = more || {};
	if(more.returnable || more.returnLabel) {
		if(!latestScript) {
			throw new Error("Return label specified, but no script is running");
		}
		scriptStack.push ({
			script: latestScript,
			returnLabel: more.returnLabel,
		});
	}
	let extension = extname(path);
	if(extension === '.js') {
		let Module = require(resolvePath(path));
		let module = _.merge(new Module(), mixinFunctions);
		latestScript = module;
		return module.run();
	}
	else {
		let script = compile (
			fs.readFileSync(path, { encoding: 'utf8' })
		);
		_.merge(script, mixinFunctions);
		latestScript = script;
		return script.run(more.startingLabel);
	}
};
mixinFunctions = {
	runFile: function() {
		exports.apply(this, arguments).done();
		this.exit && this.exit();
	},
	return: function() {
		let previousScript = scriptStack.pop();
		if(!previousScript) {
			throw new Error("Can't return: The script stack is empty");
		}
		this.exit && this.exit();
		latestScript = previousScript.script;
		previousScript.script.run(previousScript.returnLabel);
	},
};
if(!module.parent) {
	Q(exports(process.argv[2], {
		startingLabel: process.argv[3]
	})).done();
}
