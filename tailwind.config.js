/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    mode: 'jit',
    theme: {
        extend: {
            screens: {
                'xs': '510px',
            },
            fontFamily: {
                Karla: ['Karla', 'sans - serif'],
            },
            colors: {
                'primary--color': '#BF3325',
                'primary--color-text': '#1d1f2e',
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                'slideDown': 'slideDown 0.5s ease-in-out',
            },
            backgroundImage: {
                'slider-bg': 'url("./images/slider-img.jpg")'
            }
        },
    },
    plugins: [],
};
