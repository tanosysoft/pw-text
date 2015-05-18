#!/usr/bin/env iojs
'use strict';
var fs = require('fs');
var run = require('./lib/novel-cli-script-runner').run;
run(fs.readFileSync('test-script.nclis', { encoding: 'utf8' }));
