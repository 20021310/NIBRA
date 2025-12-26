import React from 'react';

const Gallery = () => {
    return (
        <div className="bg-background-dark text-gray-300 font-body antialiased min-h-screen">
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-background-dark/80 border-b border-white/5 px-4 pt-12 pb-4">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shadow-glow">
                            <span className="material-icons text-primary text-lg">auto_awesome</span>
                        </div>
                        <h1 className="text-xl font-display font-bold tracking-tight text-white">Avatar Gallery</h1>
                    </div>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition active:scale-95">
                        <span className="material-icons text-sm text-gray-400">tune</span>
                    </button>
                </div>
                <div className="relative group mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <span className="material-icons text-gray-500 text-[18px]">search</span>
                    </div>
                    <input
                        className="block w-full pl-10 pr-3 py-3 rounded-xl border border-white/10 bg-surface-dark/50 text-white placeholder-gray-500 text-sm transition-all focus:border-primary/50 focus:ring-0 search-input"
                        placeholder="Search by name, rigging, or mood..."
                        type="text"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-semibold shadow-glow">All Avatars</button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors">Photorealistic</button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors">Stylized</button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors">Corporate</button>
                </div>
            </header>

            <main className="px-4 py-6 pb-32">
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-lg font-display font-semibold text-white tracking-wide">Trending Now</h2>
                        <a className="text-xs text-primary hover:text-primary-dark transition-colors font-medium flex items-center gap-0.5" href="#">
                            View all <span className="material-icons text-[14px]">arrow_forward</span>
                        </a>
                    </div>
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-glow border border-white/10 group cursor-pointer">
                        <img
                            alt="Professional Asian woman avatar"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_AMa-zuPCnz0Zo8eYQy_zXly4ZRoH3tntUmerRAR7AQqVRDYmUMsR_ixFiMtWRONaiL-u8JdpVdg_6-sT--mpu7THPlCQo3iM_x-p3xiwruLcgmEIkHw9jr4kkDhlNy_Ds56W6GIuG1T37JjKf0BvJIz_AMF78eIgTevqsqsoNl_F8x2t3AnJFRZuVeSHCc-SCiLpxTXTEhTkCbvxgbLegxMa-FIYKN6HMDXNA-kx-Us--XO-sXpZQjjZZW366LvV0eW5EGbRh0Q"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-black/40 to-transparent"></div>
                        <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.3)]">New Arrival</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-display font-bold text-xl tracking-tight">Sarah K.</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                        <p className="text-gray-300 text-xs">Corporate Presenter</p>
                                    </div>
                                </div>
                                <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all active:scale-95 group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow">
                                    <span className="material-icons text-xl ml-0.5">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-display font-semibold mb-4 text-white tracking-wide">Avatar Library</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass-card rounded-2xl overflow-hidden group relative hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <div className="relative aspect-[3/4] bg-surface-dark border-b border-white/5">
                                <img
                                    alt="Avatar"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqjfjfduUxonZtclu3CWq2RnRSs5wJIDZFYyYOGr5MGH0-Aj_kUmBI4PZ1hDHyD-a2NX7Cutf9QVUx5OntxIg2u0_n7xN3xOOWjDTaskRoLMINDb51WeCxvooPZ6PkG93pKTO9rnIIds0odbd9Q3lgVjikCoRfFGG6S-l8vxn_yqKRaSPZ1EAko52C6gDE1hTikKPOKgAjphMcnL1sgFtZ7zSGfz0hp6q1e8ofGU75lkSvN_7fiKnPqzw3c1u639HWp_dfDg-1-0"
                                />
                                <div className="absolute top-2 right-2 flex flex-col gap-1">
                                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <span className="material-icons text-[14px] text-gray-300">accessibility</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-glow">
                                        <span className="material-icons text-white">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-display font-semibold text-sm text-gray-100 truncate">James D.</h4>
                                        <p className="text-[10px] text-gray-500 mt-0.5">Finance • Serious</p>
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded">4K</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">Wide</span>
                                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">Close-up</span>
                                </div>
                            </div>
                        </div>
                        {/* More cards would go here following the same pattern */}
                    </div>
                </div>
            </main>

            <nav className="fixed bottom-0 w-full bg-[#020204]/90 backdrop-blur-xl border-t border-white/5 pb-8 pt-3 px-6 z-50 nav-glow max-w-md mx-auto left-1/2 -translate-x-1/2">
                <div className="flex justify-between items-center max-w-md mx-auto relative">
                    <a className="flex flex-col items-center gap-1 group" href="#">
                        <span className="material-icons text-primary group-hover:text-primary-light transition-colors">grid_view</span>
                        <span className="text-[10px] font-medium text-white">Gallery</span>
                    </a>
                    <a className="flex flex-col items-center gap-1 group" href="#">
                        <span className="material-icons text-gray-500 group-hover:text-gray-300 transition-colors">movie_creation</span>
                        <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors">Create</span>
                    </a>
                    <div className="relative -top-8">
                        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white flex items-center justify-center shadow-[0_0_25px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all border-[6px] border-[#020204] group relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-icons text-3xl">add</span>
                        </button>
                    </div>
                    <a className="flex flex-col items-center gap-1 group" href="#">
                        <span className="material-icons text-gray-500 group-hover:text-gray-300 transition-colors">folder_open</span>
                        <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors">Projects</span>
                    </a>
                    <a className="flex flex-col items-center gap-1 group" href="#">
                        <span className="material-icons text-gray-500 group-hover:text-gray-300 transition-colors">settings</span>
                        <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors">Settings</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Gallery;
