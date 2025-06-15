/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// darkMode: 'media',
	theme: {
		extend: {
			screens: {
				'xxl': '1192px',
			}
		},
	},
	plugins: [],
}
