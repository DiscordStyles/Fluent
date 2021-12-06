const sass = require('sass');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const {compiler} = require('./config.json');

/**
 * Compile, autoprefix and save SCSS.
 * @param {Object} options
 * @param {string[]} options.target The path of the file to be compiled. Uses `path.join()`.
 * @param {string[]} options.output The destination and name of the file. Uses `path.join()`.
 */
module.exports = (options) => {
	console.clear();
	console.log(`Building ${options.target.join('/')} file...`);

	// Check if path exists, if not make it.
	const dirPath = options.output.filter(el => !el.includes('.')).join('/');
	if (!fs.existsSync(!dirPath)) {
		fs.mkdirSync(dirPath, {recursive: true});
	}

	sass.render({
		file: path.join(...options.target),
		outputStyle: 'expanded',
	}, async(error, result) => {
		if (error) {
			console.error(error);
			return false;
		}

		let output = Buffer.from(result.css).toString();

		if (compiler.prefix) {
			await postcss([autoprefixer]).process(output, {
				from: undefined,
				to: undefined
			}).then(res => {
				output = res.css;
			});
		}

		fs.writeFile(path.join(...options.output), output.replace('@charset "UTF-8";\n', ""), (err) => {
			if (err) console.error(err);
			else console.log(`Successfully built ${options.target.join('/')} file. (${(result.stats.duration/60000 * 60).toFixed(2)}s)`);
		})
	})
}