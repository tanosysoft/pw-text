'use strict';
let Q = require('q');
let queue = require('chain/command-queue');
exports = module.exports = function() {
};
exports.prototype.run = function() {
	this.deferred = Q.defer();
	this.courtRecord();
	return this.deferred.promise;
};
exports.prototype.courtRecord = function() {
	queue.push (
		{clear:true}, {d:0}, {who:null}
		, "Court Record"
		, "\n"
		, "\n - Evidence"
		, "\n - Profiles"
		, "\n - Back"
		, "\n\n"
		, {
			choice: {
				Evidence: () => {
					this.evidenceMenu();
				},
				Profiles: () => {
					this.profilesMenu();
				},
				Back: () => {
					this.back();
				},
			},
			context: this,
		}
	);
};
exports.prototype.evidenceMenu = function() {
	queue.push (
		"\nNot implemented.", {p:true}
		, "\n\n"
		, (() => {
			this.courtRecord();
			return 'done';
		}).bind(this)
	);
};
exports.prototype.profilesMenu = function() {
	queue.push (
		"\nNot implemented.", {p:true}
		, "\n\n"
		, (() => {
			this.courtRecord();
			return 'done';
		}).bind(this)
	);
};
exports.prototype.back = function() {
	queue.push (
		{clear:true}
		, (() => {
			this.return();
			return 'done';
		}).bind(this)
	);
};
exports.prototype.exit = function() {
	this.deferred.resolve();
};
