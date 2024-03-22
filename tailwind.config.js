/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "black-main": "rgba(45, 50, 66, 1)",
                "black-desc-tariff": "rgba(47, 67, 83, 1)",
                "teal-main": "rgba(1, 185, 197, 1)",
                "teal-main/05": "rgba(1, 185, 197, 0.05)",
                "gray-main": "rgba(129, 135, 152, 1)",
                "neutral-150": "rgba(245, 247, 247, 1)",
                "orange-main": "rgba(253, 77, 53, 1)",
                "blue-link": "rgba(45, 151, 249, 1)",
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
                '"Bebas Neue Cyrillic"',
                ...defaultTheme.fontFamily.sans,
            ],
        },
        keyframes: {
            pulsButton: {
                from: { backgroundColor: "rgba(253, 77, 53, 1)" },
                to: { backgroundColor: "rgba(253, 77, 53, 0.5)" },
            },
        },
        animation: {
            pulsButton: "pulsButton 1s ease-in infinite alternate",
        },
    },
    plugins: [],
};
