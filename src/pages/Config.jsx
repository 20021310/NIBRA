import React, { useState } from 'react';

const Config = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    return (
        <div className="bg-[#050505] text-[#f3f4f6] font-sans antialiased min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Ambient Base Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[120%] h-[500px] bg-gradient-glow opacity-100"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md h-full min-h-screen relative z-10 flex flex-col p-6">
                <header className="flex items-center justify-between mb-8 pt-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-highlight text-text-muted transition-colors border border-transparent hover:border-border-dark">
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted opacity-80">Configuration</h1>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-highlight text-text-muted transition-colors border border-transparent hover:border-border-dark">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-3 text-white tracking-tight">Ready to <span className="text-transparent bg-clip-text bg-purple-gradient">Render?</span></h2>
                        <p className="text-text-muted text-sm leading-relaxed max-w-[90%] font-light">
                            Review your settings before initiating the AI generation pipeline. Script intent is locked.
                        </p>
                    </div>

                    <div className="bg-surface-dark border border-border-dark rounded-3xl p-6 shadow-xl relative overflow-hidden mb-6 group">
                        <div className="absolute inset-0 bg-card-gradient pointer-events-none"></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-surface-highlight border border-border-dark flex items-center justify-center shadow-lg shadow-black/50">
                                <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg tracking-tight">Neo-Tokyo Pitch</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(168,85,247,0.8)]"></span>
                                    <p className="text-[10px] text-text-muted font-mono tracking-wide uppercase">#8829-AV-GEN</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 relative z-10">
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Avatar Model</span>
                                <div className="flex items-center gap-2 bg-surface-highlight py-1.5 px-3 rounded-lg border border-border-dark/50">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_AMa-zuPCnz0Zo8eYQy_zXly4ZRoH3tntUmerRAR7AQqVRDYmUMsR_ixFiMtWRONaiL-u8JdpVdg_6-sT--mpu7THPlCQo3iM_x-p3xiwruLcgmEIkHw9jr4kkDhlNy_Ds56W6GIuG1T37JjKf0BvJIz_AMF78eIgTevqsqsoNl_F8x2t3AnJFRZuVeSHCc-SCiLpxTXTEhTkCbvxgbLegxMa-FIYKN6HMDXNA-kx-Us--XO-sXpZQjjZZW366LvV0eW5EGbRh0Q"
                                        alt="Avatar"
                                        className="w-5 h-5 rounded-full ring-1 ring-border-dark"
                                    />
                                    <span className="text-sm font-medium text-gray-200">Sarah (Pro)</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-dark"></div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Resolution</span>
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">4K</span>
                                    <span className="text-sm font-medium text-gray-200">1080x1920</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-surface-dark border border-border-dark p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
                            <div className="flex items-center gap-2 mb-3 text-primary relative z-10">
                                <span className="material-symbols-outlined text-[20px]">timer</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Est. Time</span>
                            </div>
                            <div className="relative z-10">
                                <span className="text-2xl font-bold text-white tracking-tight">~3.5 min</span>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-border-dark p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-green-500/30 transition-colors duration-300">
                            <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
                            <div className="flex items-center gap-2 mb-3 text-green-400 relative z-10">
                                <span className="material-symbols-outlined text-[20px]">bolt</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Cost</span>
                            </div>
                            <div className="relative z-10">
                                <span className="text-2xl font-bold text-white tracking-tight">45 Credits</span>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pt-20 z-20 pointer-events-none flex justify-center">
                    <div className="w-full max-w-md pointer-events-auto">
                        <button
                            onClick={() => setIsProcessing(true)}
                            className="group w-full bg-purple-gradient hover:brightness-110 text-white font-semibold py-4 px-6 rounded-2xl shadow-glow active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden border border-white/10"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 text-lg tracking-wide">Start Rendering</span>
                            <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform group-hover:-translate-y-1">rocket_launch</span>
                        </button>
                    </div>
                </div>

                {/* Processing Overlay */}
                <div className={`${isProcessing ? 'flex' : 'hidden'} fixed inset-0 z-50 bg-[#050505]/80 backdrop-blur-md flex-col items-center justify-center p-8 transition-opacity duration-300`}>
                    <div className="w-full max-w-xs text-center bg-surface-dark border border-border-dark p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 rounded-full border-4 border-surface-highlight"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl text-primary animate-pulse">auto_awesome</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Rendering Avatar</h3>
                        <p className="text-xs text-text-muted mb-8 font-mono">Initializing GPU cluster...</p>

                        <div className="w-full space-y-5">
                            <div className="flex items-center gap-3 group">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                                </div>
                                <span className="text-sm font-medium text-white flex-1 text-left">Script Analysis</span>
                                <span className="text-[10px] text-text-muted uppercase tracking-wider">Done</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center relative">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-ping absolute"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <span className="text-sm font-medium text-white flex-1 text-left">Audio Synthesis</span>
                                <span className="text-[10px] text-primary animate-pulse uppercase tracking-wider font-bold">Processing</span>
                            </div>
                            <div className="flex items-center gap-3 opacity-30">
                                <div className="w-6 h-6 rounded-full border-2 border-slate-700 bg-slate-800"></div>
                                <span className="text-sm text-slate-500 flex-1 text-left">Video Rendering</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsProcessing(false)}
                            className="mt-10 text-xs text-text-muted hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                        >
                            Cancel Operation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Config;
