module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      scale: ['hover'],
      colors: {
        'white': '#ffffff',
        'blue': {
          
          50: '#ecfeff',
          700: '#0e7490',
         
        },
        'slate': {
          800: '#1e293b',
          900: '#0f172a',
          50: '#f8fafc',
        }
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
