/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: ["black", "lofi"]
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
};