'use strict';
var q = require('q');
var tw = require('./lib/typewriter');
q.spawn(function*() {
	tw.clear();
	tw.paragraph ([
		[{d:30}, "Phoenix Wright"],
		["Ace Attorney"],
	]);
	tw.paragraph ([
		[" - New Game"],
		[" - Continue"],
	]);
	yield tw.choice ([
		{
			matcher: /^New Game$/i,
			fn: function() {
				return tw.paragraph({d:30}, "Nyuu geemu desu!");
			},
		},
		{
			matcher: /^Continue$/i,
			fn: function() {
				return tw.paragraph({d:30}, "Konchinyuu desu!");
			},
		},
		{
			matcher: 'default',
			fn: function() {
				return tw.paragraph({d:0}, "?").then(function() {
					return false;
				});
			},
		}
	]);
	process.exit();
});