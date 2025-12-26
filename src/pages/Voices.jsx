import { useNavigate, useSearchParams } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';

const voices = [
    { id: 'v1', name: 'Sarah K.', model: 'v2_sk_neural', type: 'Professional, Calm, News Anchor', tags: ['Female', 'US English', '1.0x'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA5hQpds8ZT3FtaIvzJSKqWXFFsK4MADBV3osCy86v1VhGFX0M0eexZn2qki34vEjr7fg-baqSLi9-vk71co25EUI6bz8i8ZghYvCQboOcdUX3eay6al0rrjcHGo7OS7FoRTpNoVjd2FQ_DEeRbwo2wfIwPUfvHb6iYW3iHJlu06d7K6bNZvU1aJChkCHTj7pkp2IQFHgCfVOFpSaht4cE3LEe89gO0cvWzx3NA9z4ftkHqNc9CXP6HbDYwr34-p7-74B3UINks8A ' },
    { id: 'v2', name: 'Marcus R.', model: 'v2_mr_deep', type: 'Authoritative, Deep, Narration', tags: ['Male', 'UK English', '0.9x'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYwMFeSnLI7HSi0r76xKfLe2ZpmV5-kG0UwJrEZz-6pDNWAw69bVd07XZ0T889whD3ZOcZtK1Rav2t32Cb5YY-Wq3wnbA7WviR6tr475Led2CfnaHenPbOn9ElfZN-9D4YqkO-Rm9mDuLJ7iqX4rfqndgoOOlHnBw86D87j_YqABGQY_8Md7ptDI5ob3vxoF7cATaaDdXl_sFnhWgukw6zanuEGUsjhp5AJueR99wtMl9FgEdy0yOX_xpRtahcd6EX6LxNoVmbY0 ' },
    { id: 'v3', name: 'Elena M.', model: 'v2_em_soft', type: 'Soft, Explainer, Educational', tags: ['Female', 'Spanish', '1.1x'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI7IDrDFytUjBkSHjvAM-hCVRBXPTvkt-1f1WeKaUtXOpkJCaCkVBqC8uOepnJ5tetPeb92a1rVEbohD0KVeMbLnghHwQ51gqqywdoL1E54yuAtonRouZLRiS_tVGY68exXWBIBcQggEGNhofV44GWPNOWw-lgo19CUiNER-GNEwXeYj_2dY2Y9rVGT7v-dtGXtbtiHAvsyhxU1xnpci__KYBXxMZxllEMwkE9A48tOBea7BZQ6uQQZw5FFjRHe5Y5mSuPRpG-3Dw ' },
    { id: 'v4', name: 'David L.', model: 'v2_dl_tech', type: 'Tech, Fast, Startup Pitch', tags: ['Male', 'US English', '1.2x'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD88dadJa82ib-fjlJL6H98643irTMorVcxFqAlndcLLZWjjmf26rHE4FnGqfoaU9YQKN3Pf_sYRvvxK4VDepYOxGz2rtv2VH2PeIZ9muxhNc_V4R_9_6d90Fn3pZEoo8KfPDGtzo6oj41cgTRnzR_z5P2GQGsVxK0DamguNrPMa4ZJxLDkVMqxksTPIVyHteRvAs4dLUtWHkyWokx5ohTdUbWntyfm6ALafeXnGtq4INS1Ly5lxBtDMHdqsUZVszQxDbNhSo9M_Dk ' },
];

export default function Voices() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const avatarName = searchParams.get('avatar') || 'Selected Avatar';

    const handleApply = () => {
        navigate('/config');
    };

    return (
        <ScreenWrapper className="px-0">
            <div className="w-full max-w-md mx-auto min-h-screen relative pb-32 flex flex-col">
                <header className="sticky top-0 z-50 bg-background-base/80 backdrop-blur-xl border-b border-white/5 px-4 py-4 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-left">
                            <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white" onClick={() => navigate('/gallery')}>
                                <span className="material-icons-round">arrow_back</span>
                            </button>
                            <h1 className="text-lg font-semibold tracking-tight text-white font-display">Voice Catalog</h1>
                        </div>
                        <button className="text-primary-light font-medium text-sm hover:text-white transition-colors">
                            Reset
                        </button>
                    </div>
                </header>

                <main className="px-4 py-4 space-y-6 flex-1 text-left">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex items-center bg-surface-highlight rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors">
                            <span className="pl-4 flex items-center pointer-events-none">
                                <span className="material-icons-round text-gray-400 text-xl">search</span>
                            </span>
                            <input className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:ring-0 block pl-3 pr-10 py-3.5" placeholder="Search voices by name or ID..." type="text" />
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
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-gray-400 px-1">
                        <span className="font-medium text-primary-light">24 models found</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span>Deterministic Render Mode</span>
                    </div>

                    <div className="space-y-4">
                        {voices.map((voice, idx) => (
                            <div key={idx} className={`group relative bg-background-card rounded-2xl p-4 border transition-all ${idx === 0 ? 'border-primary shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]' : 'border-white/5'}`}>
                                {idx === 0 && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                            <span className="material-icons-round text-sm font-bold">check</span>
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-start space-x-4 relative z-0">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-0.5 shadow-lg">
                                            <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                                                <img alt={voice.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={voice.img} />
                                            </div>
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-20">
                                            <span className="material-icons-round text-lg ml-0.5">play_arrow</span>
                                        </button>
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                        <div className="flex items-center justify-between pr-8">
                                            <h3 className="text-lg font-bold text-white tracking-tight font-display">{voice.name}</h3>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-1 mb-2">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5">
                                                {voice.model}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 truncate">{voice.type}</p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {voice.tags.map(tag => (
                                                <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-highlight border border-white/5 text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 relative">
                                    <div className="absolute -top-[1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                                    <p className="text-xs text-gray-500 italic leading-relaxed font-light">"The foundational principle of script sovereignty guarantees creator intent..."</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <div className="fixed bottom-0 left-0 right-0 bg-background-base/90 backdrop-blur-xl border-t border-white/10 p-4 pb-8 safe-pb z-40 max-w-md mx-auto">
                    <div className="flex items-center justify-between max-w-lg mx-auto">
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Selected Voice</span>
                            <span className="text-sm font-semibold text-white flex items-center gap-2">
                                Sarah K.
                                <span className="font-normal text-gray-500 text-xs font-mono">(v2_sk_neural)</span>
                            </span>
                        </div>
                        <button className="relative group bg-primary hover:bg-primary-light text-white px-6 py-3.5 rounded-xl font-medium shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all active:scale-95 flex items-center space-x-2 overflow-hidden" onClick={handleApply}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative">Apply Voice</span>
                            <span className="relative material-icons-round text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </ScreenWrapper>
    );
}
