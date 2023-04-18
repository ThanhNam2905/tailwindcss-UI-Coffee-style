/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    mode: 'jit',
    theme: {
        extend: {
            fontFamily: {
                Karla: ['Karla', 'sans - serif'],
            },
            colors: {
                'primary--color': '#BF3325',
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                'slideDown': 'slideDown 0.5s ease-in-out',
            }
        },
    },
    plugins: [],
};
