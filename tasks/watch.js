#! /usr/bin/env node

var childProcess = require('child_process');

console.log("Launching webpack...");
var webpackCommand = "webpack-dev-server --port 8080 --config webpack.config.hot.js --content-base ./client/ --progress --colors --inline --hot";
childProcess.execSync(webpackCommand, {stdio: [0,1,2]});