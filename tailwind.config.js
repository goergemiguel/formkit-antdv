/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss')

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './lib/**/*'],
    theme: {
        extend: {},
    },
    plugins: [formKitTailwind],
}
