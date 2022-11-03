/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/premium-photo/e-learning-online-digital-age-knowledge-education-training-seminar-personal-development_113717-127.jpg?w=2000')",
        'footer-texture': "url('https://rovenlogos.com/wp-content/uploads/2021/02/rovenlogos_elearning_dark.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
