/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: {
          DEFAULT: '#211c17',
          text: '#ede4d8',
          dim: '#9c9184',
          line: '#3a332b',
        },
        paper: {
          DEFAULT: '#f1e9de',
          ink: '#211c17',
          dim: '#6b6155',
          rule: '#ded2c2',
          body: '#3a352e',
        },
        accent: {
          DEFAULT: '#b8863f',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Archivo"', '-apple-system', '"Segoe UI"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"SF Mono"', '"Cascadia Code"', 'Consolas', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
