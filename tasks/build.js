#! /usr/bin/env node

var childProcess = require('child_process');

switch(true) {
	case /^darwin/.test(process.platform):
		console.log("Launching webpack...");
		var webpackCommand = "webpack";
		childProcess.execSync(webpackCommand, {stdio: [0,1,2]});
		
		break;
		
	default:
		console.error("Platform not supported");
}