/** @type {import('tailwindcss').Config}*/
const config = {
	plugins: [require('daisyui')],
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {}
	},

	daisyui: {
		themes: ['light', 'night'],
		darkTheme: 'night'
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
