'use strict';
var _ = require('lodash');
var Q = require('q');
var cli = require('./novel-cli');
var parse = require('./novel-cli-script-parser');
exports.run = function(script, moment) {
	if(typeof(script) === 'string') {
		script = parse(script);
	}
	let fromIndex = script.moments[moment];
	let tokens = script.tokens.slice(fromIndex);
	tokens.forEach(function(token) {
		let type = Object.keys(token)[0];
		switch(type) {
			case 'm':
				break;
			case 'string':
				cli.typePart(token.string);
				break;
			case 'choice':
				cli.choice(token.choice);
				break;
			case 'clear':
				cli.clear();
				break;
			default:
				cli.typePart(token);
				break;
		}
	});
};
