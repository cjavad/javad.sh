/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            screens: {
                '3xl': '1920px',
            },
        }
    },
    daisyui: {
        themes: ["black", "lofi"]
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
};