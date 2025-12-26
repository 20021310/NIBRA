export default function ScreenWrapper({ children, className = "" }) {
    return (
        <div className="min-h-screen bg-background-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[50%] w-[120%] h-[60%] bg-primary/20 rounded-full blur-[120px] opacity-60 transform -translate-x-1/2" />
            <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=")`,
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className={`relative z-10 ${className}`}>
                {children}
            </div>
        </div>
    );
}
