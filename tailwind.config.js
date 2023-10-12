/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			sans: ['var(--font-chewy)', 'system-ui'],
			serif: ['var(--font-yk)'],
			mono: ['var(--font-khula)'],
		},
	},
	daisyui: {
		themes: ['cupcake'],
	},
	plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
};
