/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "hover-text-color": "#02c19b",
                "secondary-bg-color": "rgb(243,242,239)",
                "primary-bg-color": "rgb(255,255,255)",
                "input-bg-color": "rgb(238,243,248)",
            },
        },
    },
    plugins: [],
};
