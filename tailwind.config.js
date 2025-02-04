/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'light-red': 'hsl(0, 100%, 67%)',
				'orangey-yellow': 'hsl(39, 100%, 56%)',
				'green-teal': 'hsl(166, 100%, 37%)',
				'cobalt-blue': 'hsl(234, 85%, 45%)',
				'pale-blue': 'hsl(221, 100%, 96%)',
				'light-lavender': 'hsl(241, 100%, 89%)',
				'dark-gray-blue': 'hsl(224, 30%, 27%)'
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: true,
	},
};
