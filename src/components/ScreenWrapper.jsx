export default function ScreenWrapper({ children, className = "" }) {
    return (
        <div className="min-h-screen bg-background-dark text-text-muted antialiased relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="fixed top-0 left-[50%] -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-primary/15 to-transparent pointer-events-none z-0"></div>

            {/* Background Elements from HTML */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[120%] h-[60%] bg-primary/20 rounded-[100%] blur-[120px] opacity-60"></div>
                <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>

            <div className={`relative z-10 w-full flex flex-col items-center min-h-screen ${className}`}>
                {children}
            </div>
        </div>
    );
}
