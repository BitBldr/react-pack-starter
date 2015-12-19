#! /usr/bin/env node

var childProcess = require('child_process');
var del = require('del');

switch(true) {
	case /^darwin/.test(process.platform):
	
		del([
			'dist'
		]).then(function(paths) {
			console.log('Deleted files and folders:\n', paths.join('\n'));
		});
		
		break;
		
	default:
		console.error("Platform not supported");
}