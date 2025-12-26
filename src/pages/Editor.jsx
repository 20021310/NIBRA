import React from 'react';

const Editor = () => {
    return (
        <div className="bg-background-base text-text min-h-screen font-sans antialiased overflow-hidden selection:bg-primary selection:text-white relative">
            {/* Ambient Background Glow */}
            <div className="ambient-glow"></div>

            {/* Header */}
            <header className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between glass-panel">
                <div className="flex items-center space-x-2">
                    <button className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors text-muted hover:text-white">
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </button>
                    <h1 className="text-sm font-semibold tracking-wide uppercase text-muted">New Project</h1>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-green-900/20 text-green-400 border border-green-800/40 shadow-[0_0_10px_-3px_rgba(74,222,128,0.2)]">Draft</span>
                    <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted hover:text-white">
                        <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                </div>
            </header>

            <main className="pt-24 pb-32 px-5 h-screen flex flex-col relative z-10">
                <div className="mb-6 space-y-1">
                    <h2 className="text-3xl font-bold font-sans tracking-tight text-white flex items-center">
                        Script Editor <div className="w-2 h-2 rounded-full bg-primary ml-2 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]"></div>
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                        The AI renders exactly what is typed.
                    </p>
                </div>

                <div className="flex-1 relative group flex flex-col mb-4">
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-2xl opacity-50 blur-sm"></div>
                    <div className="relative flex-1 flex flex-col bg-surface rounded-2xl border border-white/5 overflow-hidden shadow-2xl shadow-black/50">
                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-surface-highlight/30">
                            <div className="flex space-x-5 text-xs font-mono text-muted">
                                <div className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-base text-primary">timer</span>
                                    <span className="text-gray-300">00:42</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-base text-primary">text_fields</span>
                                    <span className="text-gray-300">843 chars</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 bg-black/20 rounded-lg p-0.5 border border-white/5">
                                <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-all" title="Insert Pause">
                                    <span className="material-symbols-outlined text-lg">hourglass_empty</span>
                                </button>
                                <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-all" title="Pronunciation">
                                    <span className="material-symbols-outlined text-lg">record_voice_over</span>
                                </button>
                            </div>
                        </div>
                        <textarea
                            className="script-area flex-1 w-full p-5 bg-transparent border-none resize-none focus:ring-0 text-sm md:text-base font-mono leading-relaxed text-gray-200 placeholder-gray-600 selection:bg-primary/30"
                            placeholder="Begin typing your script here..."
                            spellcheck="false"
                            defaultValue={`Welcome to the future of deterministic video generation. 
Here, your words are law. No hallucinations, no creative liberties. Just pure, sovereign intent rendered into reality.
This update introduces a new hashing protocol. Once you lock this script, a SHA-256 hash is generated, ensuring the integrity of your message from input to final render.
Are you ready to commit?`}
                        />
                        <div className="absolute bottom-4 right-4 pointer-events-none">
                            <span className="text-[10px] font-mono text-purple-300 bg-primary/10 px-2 py-1 rounded border border-primary/20 backdrop-blur-md shadow-glow-sm">ID: 8f4a...2c91</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto space-y-4">
                    <div className="flex items-start space-x-3 px-1">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5" style={{ textShadow: '0 0 10px rgba(168,85,247,0.5)' }}>lock_clock</span>
                        <p className="text-xs text-muted">
                            Locking transforms this script into an <span className="text-white font-medium">immutable state</span>. A unique identifier will be generated and stored.
                        </p>
                    </div>
                    <button className="relative w-full group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl opacity-60 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                        <div className="relative w-full py-4 bg-surface rounded-xl border border-primary/30 flex items-center justify-center space-x-3 transition-transform active:scale-[0.98] group-hover:bg-surface-highlight">
                            <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">lock</span>
                            <span className="font-bold text-white tracking-wide text-sm group-hover:text-white transition-colors uppercase">Lock Script & Generate Hash</span>
                        </div>
                    </button>
                </div>
            </main>

            {/* Navigation */}
            <nav className="fixed bottom-0 w-full glass-panel pb-safe pt-2 px-6 pb-6 z-50">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1.5 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                        <span className="material-symbols-outlined scale-110">edit_note</span>
                        <span className="text-[10px] font-medium">Script</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">movie_filter</span>
                        <span className="text-[10px] font-medium">Render</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
                        <span className="text-[10px] font-medium">Avatar</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Editor;
