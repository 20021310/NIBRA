export default function Input({ value, onChange, placeholder, type = "text", icon, className = "" }) {
    return (
        <div className="relative group mb-4">
            {icon && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 text-sm">{icon}</span>
                </div>
            )}
            <input
                type={type}
                className={`block w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:border-primary focus:bg-white/10 focus:outline-none transition-colors ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
