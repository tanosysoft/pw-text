'use strict';
var q = require('q');
var clear = require('clear');
var read = require('./read');
var typeDelay = 50;
var queue = [];
var handlers = {};
var storedDelays = [];
var interlocutor = "????";
exports.clear = clear;
exports.paragraph = function(lines) {
	if(arguments.length > 1) {
		lines = [[].slice.call(arguments, 0)];
	}
	lines.forEach(function(line) {
		exports.type.apply(null, line);
	});
	return exports.breakLine();
};
exports.breakLine = function(number) {
	number = number || 1;
	return exports.typePart(new Array(number + 1).join("\n"));
};
exports.typePart = function() {
	var chunks = [].slice.call(arguments, 0);
	var deferred = q.defer();
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
exports.type = function() {
	exports.typePart.apply(null, arguments);
	return exports.breakLine();
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
		string: interlocutor + ": ",
		typeDelay: 0,
	});
};
exports.type.di = function() {
	queue.push ({
		type: 'string',
		string: interlocutor.replace(/./g, " ") + "  ",
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
exports.read = function(callback) {
	var deferred = q.defer();
	queue.push ({
		type: 'read',
		deferred: deferred,
	});
	if(callback) {
		deferred.promise.then(callback);
	}
	return deferred.promise;
};
exports.then = function(callback) {
	var deferred = q.defer();
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
handlers.string = function(data) {
	if(data.typeIndex === undefined) {
		data.typeIndex = 0;
	}
	if(data.typeIndex >= data.string.length) {
		queue.shift();
		return;
	}
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
