/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
      animation:{
        "spin-slow":"spin 40s linear infinite",
      },
    },
  },
  plugins: [],
}

