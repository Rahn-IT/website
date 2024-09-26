// eslint.config.js
export default [
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'/build',
			'/.svelte-kit/**',
			'/package',
			'.env',
			'.env.*',
			'!.env.example',

			// Ignore files for PNPM, NPM and YARN
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		],
		rules: {
			semi: 'error',
			'prefer-const': 'error'
		}
	}
];
