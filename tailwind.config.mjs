export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['Garamond', 'ui-serif', 'Georgia', 'serif'],
			},
			colors: {
				accent: '#2888BF',
				title: '#0F1219',
				body: '#222939',
				primary: '#222939',
			},
		},
	},
};