'use strict';
var q = require('q');
var typeDelay = 50;
var queue = [];
var handlers = {};
var storedDelays = [];
exports.type = function() {
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
exports.type.string = function(string) {
	queue.push ({
		type: 'string',
		string: string,
		typeDelay: typeDelay,
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
exports.typeDialogue = function(speaker, dialogue) {
	var lastLineEndPromise = q();
	dialogue.forEach(function(line, i) {
		exports.type({ds:true}, {d:0});
		if(i === 0) {
			exports.type(speaker, ": ");
		}
		else {
			exports.type(speaker.replace(/./g, " "), "  ");
		}
		exports.type({dr:true});
		exports.type.apply(null, line);
		lastLineEndPromise = exports.type("\n");
	});
	return lastLineEndPromise;
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
setInterval(function() {
	var current = queue[0];
	if(!current) {
		return;
	}
	handlers[current.type](current);
}, 1);
