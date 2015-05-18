'use strict';
var _ = require('lodash');
var Q = require('q');
var cli = require('./novel-cli');
var parse = require('./novel-cli-script-parser');
exports.run = function(script) {
	if(typeof(script) === 'string') {
		script = parse(script);
	}
	Q.spawn(function*() {
		var token = script.tokens[0];
		while(token) {
			var command;
			switch(token.$type) {
				case 'text':
					yield cli.typePart(token.value);
					break;
				case 'command':
					if(token.clear) {
						yield cli.clear();
					}
					else
					if(token.js) {
						yield cli.then(token.js);
					}
					else
					if(token.choice) {
						yield cli.choice(token.choice);
					}
					else {
						command = _.clone(token);
						delete command.$type;
						yield cli.typePart(command);
					}
					break;
			}
			token = script.tokens[token.index + 1];
		}
	});
};
