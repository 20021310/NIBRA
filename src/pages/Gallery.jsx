import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';

const avatars = [
    { id: 1, name: 'Sarah K.', role: 'Corporate Presenter', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANqjfjfduUxonZtclu3CWq2RnRSs5wJIDZFYyYOGr5MGH0-Aj_kUmBI4PZ1hDHyD-a2NX7Cutf9QVUx5OntxIg2u0_n7xN3xOOWjDTaskRoLMINDb51WeCxvooPZ6PkG93pKTO9rnIIds0odbd9Q3lgVjikCoRfFGG6S-l8vxn_yqKRaSPZ1EAko52C6gDE1hTikKPOKgAjphMcnL1sgFtZ7zSGfz0hp6q1e8ofGU75lkSvN_7fiKnPqzw3c1u639HWp_dfDg-1-0', tags: ['Wide', 'Close-up'], res: '4K', type: 'Professional • Serious', rig: 'accessibility' },
    { id: 2, name: 'Elena R.', role: 'Tech • Friendly', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHWsuTh957vXIElEJafYZPAuK57UmNm0tWfsTzmnqB7Ec2OUkiu9kP9WJHQMHqfoDAi9sMw2Xe4FYNaE24U15s7g6f36-IS8T7AumsaXxHBbYiBIAF2m1pOb06urVl8pVMhz-PBAsUwCEiHCTdByRMaLa2cyWnKjvLOadzNCA8cBH2TCm_yluA4k85R881w1sBXH4x4A0Q_qZVsrNrzYIXw0-UtiKb1FyivFnW2YtShL_19ax5tTF8JuVwFVa6xlJVjCrvUc67MPk', tags: ['Portrait'], res: 'HD', type: 'Tech • Friendly', rig: 'face' },
    { id: 3, name: 'Marcus T.', role: 'Casual • Happy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbbOM2t5VZ3r1LunsPs3cb6if00wwyeMIvfzpo-fWOsjRcNmzhYFl9OlF7kTXteVI1PEjPDXztTFAWZIRUM9c2p6arm82KwZ5L9XrhwxFh0z7u6QqSFHDBD4CaasF-ZoKa-autzhReBV2w_MKKcGjWQA5BdXcjo7VSibeIHQJrqlhprSl7KppODNY4OsnEORr9349kG4uNL9HhQVvt7AOMh7jdQd_tMPdXecE8reKBKFkyFCElXyZHpVBGTAeuTl5I1zilIXZ-MnA', tags: ['Dynamic'], res: '4K', type: 'Casual • Happy', rig: 'accessibility' },
    { id: 4, name: 'Aiko', role: 'Art • Calm', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwRwat7eqLFXx0s86vpG9hHT44KysH0Btq1b8VMInqFPMLI3kWhW1GiXHREVaYRe-lLRBZiDsRTjAyEKbXcgPb4p6l649ZEV-pTqI75UI35FDr6LSfAcLtC6_qUxmicxkNCg71zS7B31_Dtv0CtX9okR6wRKVS5SCoCSQw12nsVCPbHXDWZEBgClfT_ZvRl3SNJe19cqQIVCj6mrdhGxvafDk2jpcXwEe40DtvvcKsXuumONH5842Bc4V6fCHVWazR2nrbdIcBTmA', tags: ['Fixed Cam'], res: 'Pro', type: 'Art • Calm', rig: 'palette' },
];

export default function Gallery() {
    const navigate = useNavigate();

    return (
        <ScreenWrapper className="px-0">
            <div className="w-full max-w-md mx-auto min-h-screen relative pb-32">
                <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#020204]/80 border-b border-white/5 px-4 pt-12 pb-4">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shadow-glow">
                                <span className="material-icons-round text-primary text-lg">auto_awesome</span>
                            </div>
                            <h1 className="text-xl font-display font-bold tracking-tight text-white">Avatar Gallery</h1>
                        </div>
                        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition active:scale-95">
                            <span className="material-icons-round text-sm text-gray-400">tune</span>
                        </button>
                    </div>
                    <div className="relative group mb-5">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-500 text-[18px]">search</span>
                        </div>
                        <input className="block w-full pl-10 pr-3 py-3 rounded-xl border border-white/10 bg-surface-dark/50 text-white placeholder-gray-500 text-sm transition-all focus:border-primary/50 focus:ring-0" placeholder="Search by name, rigging, or mood..." type="text" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-semibold shadow-glow">All Avatars</button>
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors">Photorealistic</button>
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors">Stylized</button>
                    </div>
                </header>

                <main className="px-4 py-6">
                    {/* Trending Section */}
                    <div className="mb-10">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-lg font-display font-semibold text-white tracking-wide">Trending Now</h2>
                            <button className="text-xs text-primary hover:text-primary-dark transition-colors font-medium flex items-center gap-0.5">
                                View all <span className="material-icons-round text-[14px]">arrow_forward</span>
                            </button>
                        </div>
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-glow border border-white/10 group cursor-pointer" onClick={() => navigate('/voices?avatar=Sarah K.')}>
                            <img alt="Trending Avatar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_AMa-zuPCnz0Zo8eYQy_zXly4ZRoH3tntUmerRAR7AQqVRDYmUMsR_ixFiMtWRONaiL-u8JdpVdg_6-sT--mpu7THPlCQo3iM_x-p3xiwruLcgmEIkHw9jr4kkDhlNy_Ds56W6GIuG1T37JjKf0BvJIz_AMF78eIgTevqsqsoNl_F8x2t3AnJFRZuVeSHCc-SCiLpxTXTEhTkCbvxgbLegxMa-FIYKN6HMDXNA-kx-Us--XO-sXpZQjjZZW366LvV0eW5EGbRh0Q " />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-black/40 to-transparent"></div>
                            <div className="absolute top-3 left-3">
                                <span className="px-2.5 py-1 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.3)]">New Arrival</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-display font-bold text-xl tracking-tight">Sarah K.</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                            <p className="text-gray-300 text-xs">Corporate Presenter</p>
                                        </div>
                                    </div>
                                    <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all active:scale-95 group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow">
                                        <span className="material-icons-round text-xl ml-0.5">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Library Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-display font-semibold mb-4 text-white tracking-wide">Avatar Library</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {avatars.map((avatar) => (
                                <div key={avatar.id} className="glass-card rounded-2xl overflow-hidden group relative hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left h-fit" onClick={() => navigate(`/voices?avatar=${avatar.name}`)}>
                                    <div className="relative aspect-[3/4] bg-surface-dark border-b border-white/5">
                                        <img alt={avatar.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={avatar.img} />
                                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                                            <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                                                <span className="material-icons-round text-[14px] text-gray-300">{avatar.rig}</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-glow">
                                                <span className="material-icons-round text-white">play_arrow</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-display font-semibold text-sm text-gray-100 truncate">{avatar.name}</h4>
                                                <p className="text-[10px] text-gray-500 mt-0.5 truncate">{avatar.type}</p>
                                            </div>
                                            <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded ml-1">{avatar.res}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {avatar.tags.map(tag => (
                                                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sovereignty Info */}
                    <div className="mt-8 mb-6 p-5 rounded-2xl bg-surface-dark border border-white/5 relative overflow-hidden group text-left">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-icons-round text-primary text-sm">verified_user</span>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Script Sovereignty</h3>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed font-light">
                                The AI acts as a deterministic rendering engine. Your script is the single source of truth. All gestures and expressions are strictly mapped to your input intent.
                            </p>
                        </div>
                    </div>
                </main>

                <nav className="fixed bottom-0 w-full max-w-md bg-[#020204]/90 backdrop-blur-xl border-t border-white/5 pb-8 pt-3 px-6 z-50">
                    <div className="flex justify-between items-center max-w-md mx-auto relative">
                        <button className="flex flex-col items-center gap-1 group">
                            <span className="material-icons-round text-primary">grid_view</span>
                            <span className="text-[10px] font-medium text-white tracking-wide">Gallery</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group text-gray-500 hover:text-white" onClick={() => navigate('/editor')}>
                            <span className="material-icons-round text-gray-500 group-hover:text-gray-300">movie_creation</span>
                            <span className="text-[10px] font-medium tracking-wide">Create</span>
                        </button>
                        <div className="relative -top-8">
                            <button className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white flex items-center justify-center shadow-[0_0_25px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all border-[6px] border-[#020204] group relative overflow-hidden" onClick={() => navigate('/editor')}>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-icons-round text-3xl">add</span>
                            </button>
                        </div>
                        <button className="flex flex-col items-center gap-1 group text-gray-500 hover:text-white" onClick={() => navigate('/dashboard')}>
                            <span className="material-icons-round text-gray-500 group-hover:text-gray-300">folder_open</span>
                            <span className="text-[10px] font-medium tracking-wide">Projects</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group text-gray-500 hover:text-white">
                            <span className="material-icons-round text-gray-500 group-hover:text-gray-300">settings</span>
                            <span className="text-[10px] font-medium tracking-wide">Settings</span>
                        </button>
                    </div>
                </nav>
            </div>
        </ScreenWrapper>
    );
}
