/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [
            {
                "theme-1": {
                    "primary": "#0c4a6e",
                    "secondary": "#16a34a",
                    "accent": "#37CDBE",
                    "neutral": "#3D4451",
                    "base-100": "#FFFFFF",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#facc15",
                    "error": "#e11d48",
                }
            }
        ]
    },
    plugins: [
        require('daisyui')
    ],
};