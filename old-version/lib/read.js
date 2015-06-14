"use strict";
var q = require('q');
var readline = require('readline');
module.exports = function(question) {
	var deferred = q.defer();
	var rli = readline.createInterface ({
		input: process.stdin,
		output: process.stdout,
	});
	rli.question(question, function(answer) {
		rli.close();
		deferred.resolve(answer);
	});
	return deferred.promise;
};
