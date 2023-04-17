/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    mode: 'jit',
    theme: {
        extend: { 
            // fontFamily: {
            //     'karla': ['Karla', sans - serif],
            // },
            colors: {
                'primary--color': '#BF3325'
            }
        },
        
    },
    plugins: [],
};
