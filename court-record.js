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
		, "\n - Profiles"
		, "\n - Back"
		, "\n\n"
		, {
			choice: {
				Profiles: () => {
					this.profilesMenu();
				},
				Back: () => {
					this.evidenceMenu();
				},
			},
			context: this,
		}
	);
};
exports.prototype.profilesMenu = function() {
	let profiles = game.profiles || [];
	queue.push (
		{clear:true}
		, "Profiles"
		, "\n"
	);
	profiles.forEach(function(profile) {
		queue.push("\n - " + profile.name);
	});
	queue.push (
		"\n - Back"
		, "\n\n"
		, {
			choice: [
				{
					matcher: "Evidence",
					fn: function() {
						this.evidenceMenu();
					},
				},
				{
					matcher: "Back",
					fn: function() {
						this.courtRecord();
					},
				},
				{
					default: true,
					fn: function(option) {
						let profile = profiles.find(function(profile) {
							return (
								profile.name.toLowerCase()
								=== option.trim().toLowerCase()
							);
						});
						if(!profile) {
							console.log("?");
							return false;
						}
						this.checkProfile(profile);
					},
				},
			],
			context: this,
		}
	);
};
exports.prototype.checkProfile = function(profile) {
	queue.push (
		{clear:true}
		, profile.name
		, "\n"
		, "\n" + profile.description
		, "\n"
		, "\n - Evidence"
		, "\n - Back"
		, "\n\n"
		, {
			choice: {
				Evidence: () => {
					this.evidenceMenu();
				},
				Back: () => {
					this.profilesMenu();
				},
			},
			context: this,
		}
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
