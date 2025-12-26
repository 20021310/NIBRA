import React from 'react';

const Voices = () => {
    return (
        <div className="bg-background-base text-text-main font-sans antialiased min-h-screen pb-24 selection:bg-primary selection:text-white">
            <header className="sticky top-0 z-50 bg-background-base/80 backdrop-blur-xl border-b border-white/5 px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
                            <span className="material-icons-round">arrow_back</span>
                        </button>
                        <h1 className="text-lg font-semibold tracking-tight text-white">Voice Catalog</h1>
                    </div>
                    <button className="text-primary-light font-medium text-sm hover:text-white transition-colors">
                        Reset
                    </button>
                </div>
            </header>

            <div className="px-4 py-4 space-y-6">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative flex items-center bg-surface-highlight rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors">
                        <span className="pl-4 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-400 text-xl">search</span>
                        </span>
                        <input
                            className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:ring-0 block pl-3 pr-10 py-3.5"
                            placeholder="Search voices by name or ID..."
                            type="text"
                        />
                        <button className="pr-4 flex items-center">
                            <span className="material-icons-round text-gray-400 hover:text-primary-light transition-colors">tune</span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex-shrink-0 px-4 py-2 bg-primary text-white text-xs font-medium rounded-full shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)] hover:bg-primary-dark transition-all flex items-center space-x-1 border border-primary">
                        <span>All Voices</span>
                    </button>
                    <button className="flex-shrink-0 px-4 py-2 bg-surface-highlight border border-white/10 text-gray-300 text-xs font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all flex items-center space-x-1">
                        <span>Female</span>
                        <span className="material-icons-round text-[14px] text-gray-400">expand_more</span>
                    </button>
                    <button className="flex-shrink-0 px-4 py-2 bg-surface-highlight border border-white/10 text-gray-300 text-xs font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all flex items-center space-x-1">
                        <span>English (US)</span>
                        <span className="material-icons-round text-[14px] text-gray-400">expand_more</span>
                    </button>
                </div>

                <div className="flex items-center space-x-3 text-xs text-gray-400 px-1">
                    <span className="font-medium text-primary-light">24 models found</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span>Deterministic Render Mode</span>
                </div>

                <div className="space-y-4">
                    <div className="group relative bg-[#0f0f16] rounded-2xl p-4 border border-primary shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)] transition-all cursor-pointer">
                        <div className="absolute top-4 right-4 z-10">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                <span className="material-icons-round text-sm font-bold">check</span>
                            </span>
                        </div>
                        <div className="flex items-start space-x-4 relative z-0">
                            <div className="relative flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-0.5 shadow-lg">
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                                        <img
                                            alt="Sarah K Avatar"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA5hQpds8ZT3FtaIvzJSKqWXFFsK4MADBV3osCy86v1VhGFX0M0eexZn2qki34vEjr7fg-baqSLi9-vk71co25EUI6bz8i8ZghYvCQboOcdUX3eay6al0rrjcHGo7OS7FoRTpNoVjd2FQ_DEeRbwo2wfIwPUfvHb6iYW3iHJlu06d7K6bNZvU1aJChkCHTj7pkp2IQFHgCfVOFpSaht4cE3LEe89gO0cvWzx3NA9z4ftkHqNc9CXP6HbDYwr34-p7-74B3UINks8A"
                                        />
                                    </div>
                                </div>
                                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-20">
                                    <span className="material-icons-round text-lg ml-0.5">play_arrow</span>
                                </button>
                            </div>
                            <div className="flex-1 min-w-0 pt-1">
                                <h3 className="text-lg font-bold text-white tracking-tight">Sarah K.</h3>
                                <div className="flex items-center space-x-2 mt-1 mb-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5">v2_sk_neural</span>
                                </div>
                                <p className="text-sm text-gray-400 truncate">Professional, Calm, News Anchor</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-highlight border border-white/5 text-gray-300">
                                        <span className="material-icons-round text-[12px] mr-1.5 text-primary-light">female</span> Female
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-highlight border border-white/5 text-gray-300">
                                        <span className="material-icons-round text-[12px] mr-1.5 text-primary-light">flag</span> US English
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 relative">
                            <div className="absolute -top-[1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                            <p className="text-xs text-gray-500 italic leading-relaxed font-light">"The foundational principle of script sovereignty guarantees creator intent..."</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-background-base/90 backdrop-blur-xl border-t border-white/10 p-4 pb-8 safe-pb z-40 max-w-md mx-auto left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Selected Voice</span>
                        <span className="text-sm font-semibold text-white flex items-center gap-2">
                            Sarah K.
                            <span className="font-normal text-gray-500 text-xs font-mono">(v2_sk_neural)</span>
                        </span>
                    </div>
                    <button className="relative group bg-primary hover:bg-primary-light text-white px-6 py-3.5 rounded-xl font-medium shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all active:scale-95 flex items-center space-x-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">Apply Voice</span>
                        <span className="relative material-icons-round text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Voices;
