/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        'custom-gray': 'rgb(245, 245, 245)',
        'custom-white': 'rgb( 255, 255, 255 )',
        'custom-black': 'rgb( 64, 64, 64 )',
        'custom-yellow': 'rgb( 252, 211, 77 )',
      },
      backgroundColor: {
        'cu': 'rgb( 64, 64, 64 )',
        'cu2': 'rgb( 252, 211, 77 )',
        'cu3': 'rgb( 245, 245, 245 )',
        'cu4': 'rgb( 255, 255, 255 )',
        'cu5': 'rgb( 59, 73, 223 )',
        'cu6': 'rgb( 252, 211, 77 )',
        'cu7': 'rgb( 245, 245, 245 )',
        'cu8': 'rgb( 255, 255, 255 )',
        'cu9': 'rgb( 59, 73, 223 )',
        'cu9': 'rgb( 229, 229, 229 )',
      },
      textColor: {
        'custom-gray': 'rgb(245, 245, 245)',
        'custom-white': 'rgb( 255, 255, 255 )',
        'custom-yellow': 'rgb( 252, 211, 77 )',
        'custom-black': 'rgb( 23, 23, 23 )',
      },
    },
    fontFamily:{
      gill: ['Gill Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
};
