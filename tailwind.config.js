const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./pages/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./components/**/**/*.{js,ts,jsx,tsx}",
		"./common/components/**/*.{js,ts,jsx,tsx}",
		"./common/components/**/**/*.{js,ts,jsx,tsx}",
		"./common/components/**/**/**/*.{js,ts,jsx,tsx}",
		"./modules/**/components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/components/**/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Inter', sans-serif", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {  
					DEFAULT: '#46A8A7',  
					'50': '#C1E5E5',  
					'100': '#B2DFDF',  
					'200': '#95D3D2',  
					'300': '#79C7C6',  
					'400': '#5CBBBA',  
					'500': '#46A8A7',  
					'600': '#368080',  
					'700': '#255958',  
					'800': '#143131',  
					'900': '#0B1919'
				},
				secondary: {  
					DEFAULT: '#FFD782',  
					'50': '#FFFAF0',  
					'100': '#FFF7E5',  
					'200': '#FFF4DB',  
					'300': '#FFEDC7',  
					'400': '#FFE4AB',  
					'500': '#FFD782',  
					'600': '#FFC54A',  
					'700': '#FFB312',  
					'800': '#D99300',  
					'900': '#A16D00'
				},
				tertiary: {
					DEFAULT: '#FF6D2F',
					'50' : '#FFEEEE',
					'100': '#FFE7DF',
					'200': '#FFD8C8',
					'300': '#FFB595',
					'400': '#FF9162',
					'500': '#FF6D2F',
					'600': '#FB4B00',
					'700': '#C83C00',
					'800': '#952C00',
					'900': '#621D00'
				},
				highContrast: {
					DEFAULT: '#0C2135',
					'50' : '#405569',
					'100': '#3A88D3',
					'200': '#286FB2',
					'300': '#1F5588',
					'400': '#153B5F',
					'500': '#0C2135',
					'600': '#03070B',
					'700': '#000000',
					'800': '#000000',
					'900': '#000000'
				},
				danger: "#F82E2E",
				success: "#15D14B",
				lightBackground: "#EAEBED",
			},
			transitionDelay: {
				'0': '0ms',
				'2000': '2000ms',
			},
			transitionDuration: {
				'0': '0ms',
				'50': '50ms',
			},
			margin: {
				'6-p': '6%',
			},
			borderRadius: {
				'large': '2rem',
			}
		},
	},
	plugins: [

	],
	variants: {

	}
};