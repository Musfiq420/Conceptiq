/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Scan all src files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D348B",
        secondary: "#FFD966",
        accent: "#FF3366",
        success: "#28A745",
        warning: "#F18701",
        error: "#F35B04",
        info: "#17A2B8",  
        background: "#FFFFFF",
        surface: "#F5F5F5",
        textPrimary: "#212121",
        textSecondary: "#444444ff",
      },

      // colors: {
      //   primary: "#6a4c93",
      //   secondary: "#ffb4a2",
      //   accent: "#f28482",
      //   success: "#06d6a0",
      //   warning: "#ffb703",
      //   error: "#e63946",
      //   info: "#118ab2",
      //   background: "#fdf6f0",
      //   surface: "#faf3f3",
      //   textPrimary: "#1d1d2c",
      //   textSecondary: "#4e4e60",
      // },

     




    },
  },
  plugins: [],
};