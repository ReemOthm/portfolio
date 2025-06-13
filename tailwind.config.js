/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      keyframes:{
        typing: {
          "0%": { width: "0"},
          "100%": { width: "235px"}
        },
        blink:{
          "0%": { borderRightColor: "#fff"},
          "100%": { borderRightColor: "transparent"}
        }
      },
      animation:{
        typing: "typing 2s steps(23) both, blink 2s infinite"
      }
    },
  },
  plugins: [],
};
