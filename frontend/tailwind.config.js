/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      colors: {
        'primary': '#008080', // Existing primary color
        'light-teal': '#FBF7F0', // Added very light teal color
      },
      backgroundColor: {
        'light-teal': '#FBF7F0', // Very light teal background color
      },
    },
  },
  plugins: [],
};
