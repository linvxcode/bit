/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "./pages/**/*.{html,ts,tsx,js}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["DM Mono"],
      },
    },
    
    transitionDuration: {
      '2000': '2000ms',
    },
    screens: {
      'hp': '470',
      // => @media (min-width: 470) { ... }

      'sm': '601px',
      // => @media (min-width: 600px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [nextui()],
}

