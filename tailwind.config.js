/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#a855f7",
                "primary-dark": "#7e22ce",
                "primary-light": "#c084fc",
                "primary-glow": "rgba(168, 85, 247, 0.4)",
                secondary: "#a78bfa",
                accent: "#d8b4fe",
                "background-dark": "#020204",
                "background-base": "#020205",
                "background-card": "#0f0f16",
                "surface-dark": "#0f0f12",
                "surface-light": "#18181b",
                "surface-highlight": "#181824",
                "surface-card": "#181035",
                "border-dark": "#27272a",
                "border-subtle": "#272736",
                "border-highlight": "#4c1d95",
                "text-main": "#ffffff",
                "text-muted": "#94a3b8",
                "text-secondary": "#a1a1aa"
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Outfit", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            boxShadow: {
                'glow': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
                'glow-sm': '0 0 15px -3px rgba(147, 51, 234, 0.3)',
                'glow-strong': '0 0 25px rgba(139, 92, 246, 0.4)',
                'glow-hover': '0 0 30px -5px rgba(168, 85, 247, 0.6)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
