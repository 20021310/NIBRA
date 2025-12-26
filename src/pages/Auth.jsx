import React from 'react';

const Auth = () => {
    return (
        <div className="bg-background-dark text-text-muted min-h-screen flex justify-center items-center p-4 antialiased selection:bg-primary selection:text-white overflow-hidden relative font-sans">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[120%] h-[60%] bg-primary-glow/50 rounded-[100%] blur-[120px] opacity-60"></div>
                <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>

            <div className="w-full max-w-[400px] h-auto min-h-[800px] relative flex flex-col glass-panel rounded-[40px] overflow-hidden shadow-2xl">
                {/* Status Bar */}
                <div className="w-full h-12 flex justify-between items-center px-6 pt-3 text-white/80">
                    <span className="text-xs font-medium tracking-wide">9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <i className="fas fa-signal text-[10px]"></i>
                        <i className="fas fa-wifi text-[10px]"></i>
                        <i className="fas fa-battery-full text-[10px]"></i>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pb-8 px-6 no-scrollbar">
                    <div className="mt-8 mb-8 text-center relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-glow/20 blur-2xl rounded-full -z-10"></div>
                        <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-glow-sm backdrop-blur-md">
                            <i className="fas fa-cube text-primary-vibrant text-2xl drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"></i>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">
                            Script Sovereignty
                        </h1>
                        <p className="text-sm text-text-muted font-medium max-w-[260px] mx-auto leading-relaxed">
                            Deterministic AI Rendering Engine
                        </p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl border border-white/10 transition-all font-medium text-sm group backdrop-blur-sm">
                            <img alt="Google" className="w-5 h-5 brightness-200 contrast-0 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnyCHKuQO3Ch24nUuiBqqMCB5XjdnXmv0bVB0OKfFle5ybANOMr4aUJBrK_SeRV5KoO4ozzAVb84jX6foRdDoZjjBVPmEWMbhJk44GStPqDVZov1WBDBQhis-N2tmBD1HfmxaS4zRZfm9sqZGsn-ByJNNvn39mu65bmXvsNUsHa0V8jeaeIt84S-hA9KETrmA1HErnciuj0uz17d2F0BUsfUbuMca86YAMXEkw8v3cwCTqfhH2XS6SJ2xeUQnTepS1EiCj8C8WXTs" />
                            <span>Continue with Google</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl border border-white/10 transition-all font-medium text-sm group backdrop-blur-sm">
                            <i className="fab fa-apple text-xl opacity-90"></i>
                            <span>Continue with Apple</span>
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center mb-8">
                        <div className="absolute w-full border-t border-white/10"></div>
                        <span className="relative bg-[#0d0d10] px-3 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                            Or register securely
                        </span>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="far fa-envelope text-slate-500 group-focus-within:text-primary transition-colors"></i>
                                </div>
                                <input className="block w-full pl-11 pr-4 py-3.5 input-dark rounded-xl text-sm placeholder-slate-500 focus:outline-none transition-all" placeholder="Creator Email" type="email" />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-slate-500 group-focus-within:text-primary transition-colors"></i>
                                </div>
                                <input className="block w-full pl-11 pr-4 py-3.5 input-dark rounded-xl text-sm placeholder-slate-500 focus:outline-none transition-all" placeholder="Secure Password" type="password" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Creator Preferences</p>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="relative group">
                                    <select className="block w-full pl-3 pr-8 py-3 input-dark rounded-xl text-xs sm:text-sm text-slate-300 focus:outline-none appearance-none cursor-pointer">
                                        <option className="bg-surface-dark">English (US)</option>
                                        <option className="bg-surface-dark">Spanish</option>
                                        <option className="bg-surface-dark">French</option>
                                        <option className="bg-surface-dark">Japanese</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <i className="fas fa-chevron-down text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors"></i>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <select className="block w-full pl-3 pr-8 py-3 input-dark rounded-xl text-xs sm:text-sm text-slate-300 focus:outline-none appearance-none cursor-pointer">
                                        <option className="bg-surface-dark">MP4 (H.264)</option>
                                        <option className="bg-surface-dark">MOV (ProRes)</option>
                                        <option className="bg-surface-dark">WebM</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <i className="fas fa-chevron-down text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fas fa-share-alt text-slate-500 group-focus-within:text-primary transition-colors text-xs"></i>
                                </div>
                                <select className="block w-full pl-10 pr-10 py-3.5 input-dark rounded-xl text-sm text-slate-300 focus:outline-none appearance-none cursor-pointer">
                                    <option className="bg-surface-dark" disabled selected value="">Primary Content Platform</option>
                                    <option className="bg-surface-dark">YouTube / Google Video</option>
                                    <option className="bg-surface-dark">TikTok / ByteDance</option>
                                    <option className="bg-surface-dark">Instagram / Meta Reels</option>
                                    <option className="bg-surface-dark">LinkedIn Video</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <i className="fas fa-chevron-down text-xs text-slate-500 group-hover:text-slate-300 transition-colors"></i>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 py-1">
                            <div className="flex items-center h-5">
                                <input className="w-4 h-4 text-primary bg-white/5 border-white/10 rounded focus:ring-primary focus:ring-offset-background-dark focus:ring-offset-0" id="terms" type="checkbox" />
                            </div>
                            <label className="text-xs text-slate-400 leading-tight select-none" htmlFor="terms">
                                I agree to the <a className="text-primary hover:text-accent underline transition-colors" href="#">Terms of Service</a> and confirm that output rendering is deterministic.
                            </label>
                        </div>

                        <button className="w-full bg-button-gradient hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl shadow-glow transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden" type="submit">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10">Initialize Creator Profile</span>
                            <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform relative z-10"></i>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-400">
                            Already have access?
                            <a className="text-primary font-semibold hover:text-accent transition-colors" href="#">Log in</a>
                        </p>
                    </div>

                    <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                <i className="fas fa-shield-alt text-primary/80"></i>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-white">Secure Vault</h3>
                                <p className="text-xs text-slate-400">Your voice clone data is encrypted locally.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-6 w-full shrink-0">
                    <div className="mx-auto w-1/3 h-1 bg-white/20 rounded-full mt-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
