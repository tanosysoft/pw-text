#!/usr/bin/env iojs
'use strict';
let fs = require('fs');
let commandQueue = require('chain/command-queue');
commandQueue.registerCommandHandlers(require('chain/io'));
let compile = require('chain/compile-script');
exports = module.exports = function(path, startingLabel) {
	let script = compile (
		fs.readFileSync(path, { encoding: 'utf8' })
	);
	script.runFile = function(path) {
		exports(path).done();
		this.exit();
	};
	return script.run(startingLabel);
};
if(!module.parent) {
	exports(process.argv[2], process.argv[3]).done();
}
