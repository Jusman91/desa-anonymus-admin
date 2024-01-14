/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
			},
			colors: {
				primary:
					'hsl(var(--color-primary) / <alpha-value>)',
				bkg: {
					container:
						'hsl(var(--bg-container) / <alpha-value>)',
				},
			},
			boxShadow: {
				wrapper: '0px 2px 10px 3px hsl(183,100%,76%) inset',
				form: '-5px -5px 15px rgba(255, 255, 255, 0.1),	5px 5px 15px rgba(0, 0, 0, 0.35),	inset -5px -5px 15px rgba(255, 255, 255, 0.1), inset 5px 5px 15px rgba(0, 0, 0, 0.5)',
				elements:
					'-5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35)',
				header:
					'0px 5px 5px -5px rgba(33, 128, 168, 0.749)',
				footer:
					'0px -5px 5px -5px rgba(32, 127, 168, 0.75)',
			},
		},
	},
	plugins: [],
};
