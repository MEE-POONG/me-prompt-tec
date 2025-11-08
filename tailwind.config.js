/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // บอก Tailwind ให้สแกนไฟล์เหล่านี้เพื่อหา class
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. ส่วน Animation
      animation: {
        blob: 'blob 7s infinite',
      },
      // 2. ส่วน Keyframes (ท่าทาง)
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      // 3. ส่วน Animation Delay (เพื่อให้มันขยับไม่พร้อมกัน)
      animationDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  // 4. ส่วน Plugin (สำคัญมาก!)
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}