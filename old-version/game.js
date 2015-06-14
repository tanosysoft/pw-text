#!/usr/bin/env node
'use strict';
var Q = require('q');
var title = require('./title');
Q.spawn(function*() {
	while(true) {
		yield title();
	}
});
