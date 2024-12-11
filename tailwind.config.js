/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./leonProject/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor :"#10cab7",
        secondColor : "#2c4755",
        secondBackColor :"#f6f6f6",
      },
      // font family
      fontFamily : {
        bodyFont:["cairo"],
      },
      // 
      screens : {
        tablet : "767px",
        desktop: "991px",
        large: "1199px",
      }
    },
  },
  plugins: [],
}

