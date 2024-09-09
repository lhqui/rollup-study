// rollup.config.mjs
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/main.js',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'iife',
			plugins: [terser()]
		}
	],
	plugins: [json(), sass({ output: 'dist/style.css' })]
};