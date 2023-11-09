/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue" : "#18A7B9",
      "white" : "#fff",
      "offWhite" : "#F3F3F3",
      "black" : "#313131",
      "orange" : "#FE8432",
      "green" : "#42B918",
      "gray" : "#6B6B6B"
    },
    screens: {
      "xsm" : "370px",
      "sm" : "420px",
      "smd" : "630px",
      "md" : "768px",
      "lg" : "1080px",
      "xl" : "1280px",
    },
    
    extend: {
     
    },
  },
  plugins: [

  ],
}
