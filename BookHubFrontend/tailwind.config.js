/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false, // Tắt reset CSS của Tailwind để không xung đột với MUI
  },
  important: '#root', // Tăng độ ưu tiên cho Tailwind classes
  theme: {
    extend: {},
  },
  plugins: [],
}
