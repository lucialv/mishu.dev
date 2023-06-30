/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/index.vue',
		'./components/user/card-roles/*.{js,jsx,ts,tsx,vue}',
		'./components/user/*.{js,jsx,ts,tsx,vue}',
		'./components/*.{js,jsx,ts,tsx,vue}'
	],
	theme: {
		extend: {
			fontFamily: {
				rockoultraflf: ['RockoUltraFLF', 'Adjusted Arial Fallback', 'sans-serif']
			}
		}
	}
};
