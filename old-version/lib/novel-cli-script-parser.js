'use strict';
var fs = require('fs');
var peg = require('pegjs');
var parseAst = peg.buildParser (
	fs.readFileSync (
		__dirname + '/novel-cli-script-grammar.pegjs', {
			encoding: 'utf8'
		}
	)
).parse;
var commandParsers = {};
commandParsers.m = function(command) {
	this.moments[command.m] = command.index;
};
commandParsers.js = function(command) {
	command.js = new Function(command.js.code);
};
commandParsers.choice = function(command) {
	command.choice = new Function (
		'return {' + command.choice.objectLiteral + '};'
	)();
};
module.exports = function(scriptSource) {
	var script = {};
	script.moments = {};
	script.tokens = parseAst(scriptSource).map(function(token, i) {
		var command;
		var commandParser;
		token.index = i;
		command = Object.keys(token)[0];
		commandParser = commandParsers[command];
		if(commandParser) {
			commandParser.call(script, token);
		}
		return token;
	});
	return script;
};
