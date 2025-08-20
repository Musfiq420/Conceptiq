/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Scan all src files
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#3D348B",
      //   secondary: "#7678ED",
      //   success: "#F7B801",
      //   warning: "#F18701",
      //   error: "#F35B04",
      //   info: "#7678ED",
      //   background: "#FFFFFF",
      //   surface: "#F5F5F5",
      //   textPrimary: "#212121",
      //   textSecondary: "#3D348B",
      // },
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
    },
  },
  plugins: [],
};