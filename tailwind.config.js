/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize:{
        "fluid-header": "var(--fluid-header)",
        "fluid-base": "var(--fluid-base)",
      },
      padding:{
        "custom-fluid-p": "var(--ctm-fluid-p)"
      },
      keyframes: {
        scrolldownAnim: {
          '0%' : {
            opacity: 0,
            height: "6px",
          },
        
          '40%' : {
            opacity: 1,
            height: '10px',
          },
        
          '80%' : {
            transform: 'translate(0, 20px)',
            height: '10px',
            opacity: 0,
          },
        
          '100%' : {
            height: '3px',
            opacity: 0,
          }
        },
        pulse54012 : {
          from :{
            opacity: 0,
          },

          to : {
            opacity: 0.5,
          },
        },
      },
      animation:{
        scroll: 'scrolldown-anim 2s infinite',
        pulse: 'pulse54012 500ms ease infinite alternate',
        slow_pulse: 'pulse54012 500ms ease infinite alternate 250ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#C778DD 2px, transparent 2px)',
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}