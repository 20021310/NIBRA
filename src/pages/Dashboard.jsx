import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import { useScript } from '../context/ScriptContext';

export default function Dashboard() {
    const navigate = useNavigate();
    const { projects } = useScript();

    return (
        <ScreenWrapper className="px-0">
            <div className="w-full max-w-md mx-auto min-h-screen relative pb-20 overflow-hidden bg-background-dark/30 backdrop-blur-sm">
                {/* Top Header */}
                <header className="sticky top-0 z-50 glass-panel px-5 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
                            <span className="material-icons-round text-[20px]">auto_awesome</span>
                        </div>
                        <h1 className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 font-display">VocalClone AI</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-full hover:bg-white/10 transition-colors p-1">
                            <span className="material-icons-round text-slate-300">notifications</span>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border border-surface-dark shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
                        </button>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px] shadow-lg shadow-purple-900/30">
                            <img alt="User" className="w-full h-full rounded-full object-cover border-2 border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsYMlm3KJPOYUc8NLgtUr9v92PrdBjGTQqrVD0cbNqwG3TI3zeXkb3tvVkejbJrXmJ-KMVKvT08LynDPMPGkjKDUaPQFb3H0NGayqYNmE8nbTDD497-g6RTM6tVsp4EQsXMb4_2I1HFHoP6ETJJedl2-R9Y-NHlAvm00urvN7mEt_fBZ8tcFzlFHmol_PYEneek8EyEH9WiogJPIjeHwGkMeSdvs5OjMsyWDCTdQqPSrTmiYIajRQRe1GKGWPCDVebwEh6pQD7yPI" />
                        </div>
                    </div>
                </header>

                <main className="px-5 py-6 space-y-8 relative z-10">
                    {/* Balance Section */}
                    <section className="space-y-5">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-purple-300/80 font-medium uppercase tracking-wider mb-1">Rendering Balance</p>
                                <h2 className="text-4xl font-bold text-white tracking-tight drop-shadow-sm font-display">12,450 <span className="text-base font-medium text-slate-400">cr</span></h2>
                            </div>
                            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 text-purple-200">
                                Top Up
                            </button>
                        </div>

                        {/* Live Progress Card */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-surface-card to-[#130b2e] border border-white/10 shadow-2xl shadow-purple-900/20 group">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all duration-700"></div>
                            <div className="absolute bottom-[-20%] left-[-10%] w-40 h-40 bg-blue-500/10 rounded-full blur-[40px]"></div>
                            <div className="relative p-6 z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)] animate-pulse">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 shadow-[0_0_5px_#4ade80]"></span>
                                        Rendering Live
                                    </span>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <span className="material-icons-round">more_horiz</span>
                                    </button>
                                </div>
                                <h3 className="text-2xl font-bold mb-1.5 text-white font-display">Product Launch V2</h3>
                                <p className="text-sm text-slate-400 mb-8 font-light">Determining lip-sync vectors...</p>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-semibold text-purple-200 tracking-wide">
                                        <span>Processing</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-white/5">
                                        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] relative transition-all duration-500" style={{ width: '78%' }}>
                                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Filters */}
                    <section>
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 pt-1">
                            <button className="flex-shrink-0 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_4px_20px_-4px_rgba(168,85,247,0.5)] border border-primary/50">
                                All Projects
                            </button>
                            <button className="flex-shrink-0 bg-surface-card border border-border-dark text-slate-400 px-5 py-2.5 rounded-full text-xs font-semibold hover:border-primary/50 hover:text-white hover:bg-white/5 transition-all">
                                Completed
                            </button>
                            <button className="flex-shrink-0 bg-surface-card border border-border-dark text-slate-400 px-5 py-2.5 rounded-full text-xs font-semibold hover:border-primary/50 hover:text-white hover:bg-white/5 transition-all">
                                Drafts
                            </button>
                        </div>
                    </section>

                    {/* Project List */}
                    <section className="space-y-5">
                        <div className="flex justify-between items-center px-1">
                            <h3 className="font-semibold text-lg text-white font-display">Recent Renders</h3>
                            <button className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition-colors uppercase tracking-wide">View History</button>
                        </div>
                        <div className="grid gap-4">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-surface-card/60 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 group hover:bg-surface-card/80">
                                    <div className="flex gap-4">
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800 shadow-inner">
                                            <div className="w-full h-full bg-surface-highlight opacity-90 group-hover:scale-110 transition-transform duration-500"></div>
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                                <span className="material-icons-round text-white drop-shadow-md text-3xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">play_circle</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                            <div>
                                                <h4 className="font-semibold text-base text-white truncate group-hover:text-purple-200 transition-colors font-display">{project.title}</h4>
                                                <p className="text-xs text-slate-400 mt-1 truncate font-light">Avatar: {project.avatar} • {project.time}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${project.status === 'Ready' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                                <div className="flex gap-3">
                                                    <button className="text-slate-500 hover:text-white transition-colors">
                                                        <span className="material-icons-round text-[18px]">content_copy</span>
                                                    </button>
                                                    <button className="text-slate-500 hover:text-white transition-colors">
                                                        <span className="material-icons-round text-[18px]">download</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="grid grid-cols-2 gap-4 pt-2 pb-6 text-center">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-surface-card to-[#1a123d] border border-white/5 hover:border-indigo-500/50 flex flex-col items-center justify-center space-y-3 cursor-pointer hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group" onClick={() => navigate('/editor')}>
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300">
                                <span className="material-icons-round">add_box</span>
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white">New Project</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-surface-card to-[#1a123d] border border-white/5 hover:border-pink-500/50 flex flex-col items-center justify-center space-y-3 cursor-pointer hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all group">
                            <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300">
                                <span className="material-icons-round">folder_shared</span>
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Templates</span>
                        </div>
                    </section>
                </main>

                {/* FAB */}
                <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 border border-white/20" onClick={() => navigate('/editor')}>
                    <span className="material-icons-round text-3xl">add</span>
                </button>

                {/* Navigation Bar */}
                <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/5 px-6 py-4 z-50 safe-pb max-w-md mx-auto">
                    <ul className="flex justify-between items-center px-2">
                        <li>
                            <button className="flex flex-col items-center gap-1.5 text-primary group">
                                <span className="material-icons-round group-hover:scale-110 transition-transform">dashboard</span>
                                <span className="text-[10px] font-medium tracking-wide">Home</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group" onClick={() => navigate('/dashboard')}>
                                <span className="material-icons-round group-hover:scale-110 transition-transform">movie</span>
                                <span className="text-[10px] font-medium tracking-wide">Projects</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group" onClick={() => navigate('/gallery')}>
                                <span className="material-icons-round group-hover:scale-110 transition-transform">face</span>
                                <span className="text-[10px] font-medium tracking-wide">Avatars</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group">
                                <span className="material-icons-round group-hover:scale-110 transition-transform">settings</span>
                                <span className="text-[10px] font-medium tracking-wide">Settings</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </ScreenWrapper>
    );
}
