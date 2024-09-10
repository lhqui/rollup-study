// rollup.config.mjs
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';
import ts from "rollup-plugin-ts";

export default {
	input: 'src/main.ts',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'iife',
			plugins: [terser()]
		}
	],
	plugins: [json(), sass({ output: 'dist/style.css' }), ts()]
};