/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'etn-principal':'#123c5d',
				'etn-secundary':'#7ba7ae',
				'doters-green':'#004951',
				'doters-green-light':'#2affac',
			},
			borderRadius:{
				'card':'110px'
			}
		},
	},
	plugins: [],
}
