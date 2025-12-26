export default function Button({ onClick, children, variant = 'primary', className = "" }) {
    const variants = {
        primary: "bg-primary hover:bg-primary-dark border border-white/10 shadow-glow hover:shadow-glow-hover",
        secondary: "bg-white/5 hover:bg-white/10 border border-white/10",
        ghost: "bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10"
    };

    return (
        <button
            onClick={onClick}
            className={`py-3 px-6 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
