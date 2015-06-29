'use strict';
(global || window).game = {};
global.game = {};
game.evidence = [
	{
		name: "Attorney's Badge",
		description: (
			"Type: Other."
			+ "\nOne of my possessions."
			+ "\n"
			+ "\nNo one would believe I was a defense"
			+ " attorney if I didn't carry this."
		),
	},
	{
		name: "Cindy's Autopsy Report",
		description: (
			"Type: Reports."
			+ "\nReceived from Mia Fey."
			+ "\n"
			+ "\nTime of death: 7/31, 4PM-5PM."
			+ "\nCause of death: loss of blood due to blunt trauma."
		),
	},
];
game.profiles = [
	{
		name: "Mia Fey",
		description: (
			"Age: 27."
			+ "\nGender: Female."
			+ "\n"
			+ "\nChief Attorney at Fey & Co.."
			+ "\nMy boss, and a very good defense attorney."
		),
	},
	{
		name: "Larry Butz",
		description: (
			"Age: 23."
			+ "\nGender: Male."
			+ "\n"
			+ "\nThe defendant in this case."
			+ "\nA likeable guy who was my friend in grade school."
		),
	},
	{
		name: "Cindy Stone",
		description: (
			"Age: 22."
			+ "\nGender: Female."
			+ "\n"
			+ "\nThe victim in this case."
			+ "\nA model, she lived in an apartment by herself."
		),
	},
];
