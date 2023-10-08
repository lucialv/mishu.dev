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
			animation: {
				text: 'text 3s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			fontFamily: {
				rockoultraflf: ['RockoUltraFLF', 'Adjusted Arial Fallback', 'sans-serif']
			}
		}
	}
};
