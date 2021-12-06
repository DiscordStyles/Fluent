// GitHub action used to build scss files to the dist folder.
// You are not meant to run this locally.

const compile = require('./compile');
const {build} = require('./config.json');

build.forEach(step => {
	compile({
		target: step.target,
		output: [...step.output]
	});
})