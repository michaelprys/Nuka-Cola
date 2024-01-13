/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                custom: '0 6px 10px 0 rgba(0, 0, 0, 0.2);',
            },
        },
    },
    plugins: [],
};
