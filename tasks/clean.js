#! /usr/bin/env node

var del = require('del');
 
console.log("Cleaning files...");
del([
	'dist'
]).then(paths => {
	console.log('Deleted files and folders:\n', paths.join('\n'));
});