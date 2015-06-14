'use strict';
require('array.prototype.find');
var Q = require('q');
var _ = require('lodash');
var clear = require('clear');
var read = require('./read');
var typeDelay = 50;
var queue = [];
var handlers = {};
var storedDelays = [];
var defaultInterlocutor = "????";
var interlocutor = null;
process.on('SIGINT', function() {
	process.stdout.write('\n\n');
	process.exit();
});
exports.reset = function() {
	queue.length = 0;
};
exports.clear = function() {
	var deferred = Q.defer();
	queue.push ({
		type: 'clear',
		deferred: deferred,
	});
	return deferred.promise;
};
exports.paragraph = function() {
	exports.type.apply(null, arguments);
	return exports.breakLine();
};
exports.breakLine = function(number) {
	number = number || 1;
	return exports.typePart(new Array(number + 1).join("\n"));
};
exports.wait = function(howLong) {
	return exports.typePart({w:howLong});
};
exports.interlocutor = function() {
	return interlocutor;
};
exports.typePart = function() {
	var chunks = [].slice.call(arguments, 0);
	var deferred = Q.defer();
	chunks.forEach(function(chunk) {
		var commandName;
		var commandHandler;
		if(typeof(chunk) === 'string') {
			exports.type.string(chunk);
		}
		else {
			commandName = Object.keys(chunk)[0];
			commandHandler = exports.type[commandName];
			if(!commandHandler) {
				throw new Error("Unknown type command: " + JSON.stringify(chunk));
			}
			commandHandler(chunk[commandName], chunk);
		}
	});
	queue.push ({
		type: 'deferred',
		deferred: deferred
	});
	return deferred.promise;
};
exports.type = function(lines) {
	var lastLinePromise;
	if(arguments.length === 1 && Array.isArray(lines)) {
		lines.forEach(function(line) {
			lastLinePromise = exports.type.apply(null, line);
		});
		return (lastLinePromise || Q());
	}
	else {
		exports.typePart.apply(null, arguments);
		return exports.breakLine();
	}
};
exports.type.string = function(string) {
	queue.push ({
		type: 'string',
		string: string,
		typeDelay: typeDelay,
	});
};
exports.type.who = function(name) {
	interlocutor = name;
};
exports.type.dh = function() {
	queue.push ({
		type: 'string',
		string: "  " + (interlocutor || defaultInterlocutor) + ": ",
		typeDelay: 0,
	});
};
exports.type.di = function() {
	queue.push ({
		type: 'string',
		string: (
			"  " + (interlocutor || defaultInterlocutor)
				.replace(/./g, " ") + "  "
		),
		typeDelay: 0,
	});
};
exports.type.w = function(wait) {
	queue.push ({
		type: 'wait',
		wait: wait,
	});
};
exports.type.ds = function() {
	storedDelays.push(typeDelay);
};
exports.type.dr = function() {
	typeDelay = storedDelays.pop();
};
exports.type.d = function(delay) {
	typeDelay = delay;
};
exports.type.id = function(delay) {
	typeDelay += delay;
};
exports.type.dd = function(delay) {
	typeDelay -= delay;
	if(typeDelay < 0) {
		typeDelay = 0;
	}
};
exports.choice = Q.async(function*(askFn, options) {
	var loopCount = 0;
	if(arguments.length === 1) {
		options = askFn;
		askFn = null;
	}
	if(typeof(options) === 'object' && !Array.isArray(options)) {
		options = _.map(options, function(value, key) {
			return {
				matcher: key,
				fn: value,
			};
		});
	}
	if(askFn) {
		yield askFn(loopCount);
	}
	let promise = exports.read(function(line) {
		var matchValues;
		var chosen = options.find(function(option) {
			if(option.matcher === 'default') {
				matchValues = [line];
				return true;
			}
			if(option.matcher instanceof RegExp) {
				matchValues = option.matcher.exec(line);
				if(!matchValues) {
					return false;
				}
				matchValues = [matchValues].concat(matchValues.slice(1));
				return true;
			}
			if (
				line.trim().toLowerCase()
				=== option.matcher.toString().toLowerCase()
			) {
				matchValues = [line];
				return true;
			}
		});
		if(!chosen) {
			exports.paragraph({d:0}, "?");
			return false;
		}
		if(!chosen.fn) {
			return;
		}
		return Q(chosen.fn.apply(null, matchValues)).then (
			Q.async(function*(result) {
				if(result === false && askFn) {
					yield askFn(++loopCount);
				}
				return result;
			})
		);
	});
	promise.done();
	return promise;
});
exports.read = function(callback) {
	var deferred = Q.defer();
	queue.push ({
		type: 'read',
		deferred: deferred,
	});
	if(!callback) {
		return deferred.promise;
	}
	else {
		return (
			deferred.promise
				.then(callback)
				.then(function(callbackResult) {
					if(callbackResult === false) {
						return exports.read(callback);
					}
					return callbackResult;
				})
		);
	}
};
exports.then = function(callback) {
	var deferred = Q.defer();
	queue.push ({
		type: 'deferred',
		deferred: deferred,
	});
	deferred.promise.then(callback);
	return deferred.promise;
};
handlers.deferred = function(data) {
	data.deferred.resolve();
	queue.shift();
};
handlers.clear = function(data) {
	clear();
	data.deferred.resolve();
	queue.shift();
};
handlers.string = function(data) {
	if(data.typeIndex === undefined) {
		data.typeIndex = 0;
	}
	if(data.typeIndex >= data.string.length) {
		queue.shift();
		return;
	}
	if(data.typeDelay < 10) {
		process.stdout.write(data.string.slice(data.typeIndex));
		data.typeIndex = data.string.length;
	}
	else
	if (
		data.typeIndex === 0
		|| (
			Date.now() - data.lastTypeTimestamp > data.typeDelay
		)
	) {
		process.stdout.write(data.string[data.typeIndex++]);
		data.lastTypeTimestamp = Date.now();
	}
};
handlers.wait = function(data) {
	if(!data.waitStartTimestamp) {
		data.waitStartTimestamp = Date.now();
	}
	if(Date.now() - data.waitStartTimestamp > data.wait) {
		queue.shift();
	}
};
handlers.read = function(data) {
	if(data.waiting) {
		return;
	}
	data.waiting = true;
	data.deferred.resolve(read("> "));
	data.deferred.promise.fin(function() {
		queue.shift();
	});
};
setInterval(function() {
	var current = queue[0];
	if(!current) {
		return;
	}
	handlers[current.type](current);
}, 1);