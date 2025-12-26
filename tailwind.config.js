/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#a855f7",
                    dark: "#7e22ce",
                    light: "#c084fc",
                    glow: "rgba(168, 85, 247, 0.4)",
                    vibrant: "#8b5cf6",
                },
                surface: {
                    DEFAULT: "#0f0f12",
                    dark: "#0f0f13",
                    card: "#181035",
                    highlight: "#181824",
                    light: "#18181b",
                },
                background: {
                    dark: "#020204",
                    base: "#020205",
                    deep: "#030014",
                },
                border: {
                    dark: "#27272a",
                    subtle: "#272736",
                    highlight: "#4c1d95",
                },
                text: {
                    main: "#ffffff",
                    muted: "#94a3b8",
                    secondary: "#a1a1aa",
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Outfit", "Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(168, 85, 247, 0.3)',
                'glow-sm': '0 0 15px -3px rgba(147, 51, 234, 0.3)',
                'glow-strong': '0 0 25px rgba(139, 92, 246, 0.4)',
                'glow-hover': '0 0 30px -5px rgba(168, 85, 247, 0.6)',
                'glow-input': '0 0 0 2px rgba(139, 92, 246, 0.3)',
            },
            backgroundImage: {
                'purple-gradient': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                'button-gradient': 'linear-gradient(to right, #7c3aed, #9333ea)',
                'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)',
                'gradient-glow': 'radial-gradient(circle at top, rgba(147, 51, 234, 0.15), transparent 70%)',
            }
        },
    },
    plugins: [],
}
