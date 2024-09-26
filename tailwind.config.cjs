/** @type {import('tailwindcss').Config}*/
const config = {
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
