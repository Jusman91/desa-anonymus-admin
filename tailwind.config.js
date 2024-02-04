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
			fontSize: {
				h1: [
					'clamp(20px, 3vw, 48px)',
					{
						lineHeight: '1',
						fontWeight: '700',
					},
				],
				h2: [
					'clamp(18px, 2.8vw, 36px)',
					{
						lineHeight: '2.5rem',
						fontWeight: '700',
					},
				],
				h3: [
					'clamp(16px, 2.6vw, 30px)',
					{
						lineHeight: '2.25rem',
						fontWeight: '700',
					},
				],
				h4: [
					'clamp(14px, 2.4vw, 24px)',
					{
						lineHeight: '2rem',
						fontWeight: '700',
					},
				],
				h5: [
					'clamp(12px, 2.2vw, 20px)',
					{
						lineHeight: '1.75rem',
						fontWeight: '700',
					},
				],
				h6: [
					'clamp(12px, 2vw, 18px)',
					{
						lineHeight: '1.75rem',
						fontWeight: '700',
					},
				],
				p: [
					'clamp(12px, 2vw, 14px)',
					{
						lineHeight: '1.25rem',
					},
				],
			},
			colors: {
				'color-base':
					'hsl(var(--color-base) / <alpha-value>)',
				primary:
					'hsl(var(--color-primary) / <alpha-value>)',
				bkg: {
					base: 'hsl(var(--bg-base) / <alpha-value>)',
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
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [],
};
