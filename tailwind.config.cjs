/** @type {import('tailwindcss').Config}*/
const config = {
	plugins: [require('daisyui')],
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {}
	},

	daisyui: {
		themes: ['light', 'dark'],
		darkTheme: 'dark'
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
