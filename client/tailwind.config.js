/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
      boxShadow: {
        "custom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        'color-acento':'#2A7767',
        'color-primario':'#990047',
        'color-secundario':'#FFF8F4',
        'color-texto-subtitulos':'#4D4D4D',
        'color-beige':'#FFF5EE',
        'color-remolacha':'#66002F',
        'color-encabezados':'#2C2C2C',
        'color-bg-tarjetas':'#FFF5EE'
      },
      borderRadius:{
        'round-target':'5rem'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

