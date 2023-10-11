/**
 * @type {import('rollup').RollupOptions}
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';

import pkg from './package.json' assert {type: 'json'};

const ROLLUP_CONFIG = [
	{
		input: 'src/main.ts',
		output: [
			{file: pkg.main, format: 'cjs', sourcemap: false},
			{file: pkg.module, format: 'esm', sourcemap: false},
		],
		external: ['react'],
		plugins: [
			typescript(),
			resolve(),
			commonjs(),
			svgr({icon: true, typescript: true, svgo: true, ref: true, outDir: './src/icons'}),
		],
	},
];

export default ROLLUP_CONFIG;

// export default [
// 	{
// 		input: 'src/main.ts',
// 		output: {file: 'main.js', format: 'cjs', sourcemap: true},
// 		plugin: [typescript()],
// 	},
// ];
