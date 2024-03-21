/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "black-main": "rgba(45, 50, 66, 1)",
                "teal-main": "rgba(1, 185, 197, 1)",
                "gray-main": "rgba(129, 135, 152, 1)",
                "neutral-150": "rgba(245, 247, 247, 1)",
            },
        },
        container: {
            center: true,
            padding: {
                "2xl": "3rem",
            },
        },
        fontFamily: {
            sans: [
                '"PT Root UI"',
                '"Rubik"',
                '"Bebas Neue"',
                ...defaultTheme.fontFamily.sans,
            ],
        },
    },
    plugins: [],
};
