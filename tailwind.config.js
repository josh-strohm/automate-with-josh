/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'turquoise': {
                    DEFAULT: '#1ac1ce', // Original color
                    dark: '#17adb9',     // 10% darker
                    darker: '#1599a5',   // 15% darker
                    darkest: '#12858f',  // 25% darker
                },
                'slate': {
                    DEFAULT: '#64748b', // Original color - lighter slate blue
                    dark: '#58667b',     // 10% darker
                    darker: '#4b586a',   // 15% darker
                    darkest: '#3f4a59',  // 25% darker
                }
            }
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}
