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
	let evidenceList = game.evidence || [];
	queue.push (
		{clear:true}
		, "Evidence"
		, "\n"
	);
	evidenceList.forEach(function(evidence) {
		queue.push("\n - " + evidence.name);
	});
	queue.push (
		"\n - Back"
		, "\n\n"
		, {
			choice: [
				{
					matcher: "Back",
					fn: function() {
						this.courtRecord();
					},
				},
				{
					default: true,
					fn: function(option) {
						let evidence = evidenceList.find(function(evidence) {
							return (
								evidence.name.toLowerCase()
								=== option.trim().toLowerCase()
							);
						});
						if(!evidence) {
							console.log("?");
							return false;
						}
						this.checkEvidence(evidence);
					},
				},
			],
			context: this,
		}
	);
};
exports.prototype.checkEvidence = function(evidence) {
	queue.push (
		{clear:true}
		, evidence.name
		, "\n"
		, "\n" + evidence.description
		, "\n"
		, "\n - Back"
		, "\n\n"
		, {
			choice: {
				Back: (() => {
					this.evidenceMenu();
				}).bind(this),
			},
		}
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
