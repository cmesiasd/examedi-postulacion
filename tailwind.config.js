/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        examedi: {
          DEFAULT: '#133963',
          dark: '#008CFF'
        },
        bug: '#83C300',
        dark: '#5B5466',
        dragon: '#006FC9',
        electric: '#FBD100',
        fairy: '#FB89EB',
        fighting: '#E0306A',
        fire: '#FF9741',
        flying: '#89AAE3',
        ghost: '#4C6AB2',
        grass: '#38BF4B',
        ground: '#E87236',
        ice: '#4CD1C0',
        normal: '#919AA2',
        poison: '#B567CE',
        psychic: '#FF6675',
        rock: '#C8B686',
        steel: '#5A8EA2',
        water: '#3692DC'
      }
    }
  },
  plugins: []
}
