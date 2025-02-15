/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gagalin: ["Gagalin", "serif"], // 'Gagalin' adalah nama font yang Anda definisikan di @font-face
        capriola: ["Capriola", "sans-serif"], // 'Gagalin' adalah nama font yang Anda definisikan di @font-face
        // Anda bisa menambahkan font custom lainnya di sini
      },
      colors: {
        primary: "#4a7bb3", // Contoh warna primer
        // secondary: "#7dd3fc", // Contoh warna sekunder
        secondary: "#cce5ff", // Contoh warna sekunder
        light: "#ffffff", // Contoh warna cerah
      },
    },
  },
  plugins: [],
};

// #4a7bb2
