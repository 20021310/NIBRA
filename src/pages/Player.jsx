import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Player() {
    const navigate = useNavigate();

    return (
        <ScreenWrapper className="px-0">
            <div className="w-full max-w-md h-[90vh] bg-[#020204] shadow-2xl shadow-purple-900/10 overflow-hidden relative rounded-[2.5rem] border-[6px] border-[#1f1f22] flex flex-col mx-auto my-auto self-center">
                {/* StatusBar */}
                <div className="h-12 w-full flex justify-between items-center px-7 pt-3 select-none z-20 text-white/80">
                    <span className="text-xs font-semibold tracking-wide">9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <span className="material-icons-round text-[16px]">signal_cellular_alt</span>
                        <span className="material-icons-round text-[16px]">wifi</span>
                        <span className="material-icons-round text-[18px]">battery_full</span>
                    </div>
                </div>

                {/* Header */}
                <div className="px-6 pb-4 pt-1 flex items-center justify-between z-10">
                    <button className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-white/10 transition-colors" onClick={() => navigate('/dashboard')}>
                        <span className="material-icons-round text-white font-display">arrow_back</span>
                    </button>
                    <h1 className="font-semibold text-xs uppercase tracking-[0.15em] text-gray-400 font-display">Review Generation</h1>
                    <button className="w-10 h-10 flex items-center justify-center -mr-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-icons-round text-white font-display">more_horiz</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pb-32 w-full">
                    {/* Video Player Section */}
                    <div className="relative w-full aspect-[4/5] bg-black group mx-auto mb-6 shadow-2xl overflow-hidden">
                        <img alt="AI Avatar Video Preview" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_FXxrUm8cOURS5f75DD0v3SFmwGzij494GYhcxmGms6tMlNp2j3Y4BLMKgzFuP-4GzClV6b7mdIi74M33Mkwc7jo98H9niNmyt8uRjPLEi5NPEA4LbDrPgHpZ1pPeWPSHGQDgN9HMdsve8ofka5fxKU51JO4rWNKUMW_KTPSURUGZHug56qKnzAquOl-DaTtqp6bDiAnf_m3EfNva71h1OvqJuLjP83LwI_wKWOvT0gA5Dk8L_vw3QujPxB2gOgwDQqdTwf_jrFg " />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/20 shadow-glow-strong transition-transform duration-300 group-hover:scale-110">
                                <span className="material-icons-round text-white text-4xl">play_arrow</span>
                            </div>
                        </div>
                        {/* Gradient and Controls overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3 z-10">
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer relative group/progress">
                                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-violet-500 to-purple-400 w-1/3 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.5)]"></div>
                                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/progress:scale-100 transition-transform"></div>
                            </div>
                            <div className="flex items-center justify-between text-white mt-1">
                                <span className="text-[11px] font-medium tracking-wide text-gray-300">0:12 / 0:45</span>
                                <div className="flex items-center gap-4">
                                    <span className="material-icons-round text-xl text-gray-300 cursor-pointer hover:text-white transition-colors">closed_caption</span>
                                    <span className="material-icons-round text-xl text-gray-300 cursor-pointer hover:text-white transition-colors">fullscreen</span>
                                </div>
                            </div>
                        </div>
                        {/* Captions Overlay */}
                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 px-5 py-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-center w-[85%] shadow-lg">
                            <p className="text-white text-[13px] font-medium leading-relaxed drop-shadow-md">
                                "Here's how AI is changing the landscape of digital content creation forever."
                            </p>
                        </div>
                    </div>

                    {/* Title & Status */}
                    <div className="px-6 mb-8 text-left">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1.5 font-display">Product Launch V2</h2>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                        Ready
                                    </span>
                                    <span className="text-xs text-gray-500">v2.1</span>
                                </div>
                            </div>
                            <div className="w-11 h-11 rounded-full border-2 border-violet-500/50 p-0.5 shadow-glow overflow-hidden">
                                <img alt="Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-7bkFZVr9BHlNT-ZfkpP6G8HTwKYySAM-iJQIAkpt8udc9F2rgLcdcglTv0lB6fYWm3tYedIDsWIlPcXPeKOFa8hP3ZKSaiuPYV4E47TiBZ6CCyYCf8H60et1pw9CgYlVN2xn7MeZ7FhpzZjqTn89B1cV2-iYN1baCtmt7XLGHDsk11buvtdwTafM6TRU-WCrFQKJee2DJM_JX5UHTWp81LoUGUgyr3DdjqpglSipLSDS6o_FsUroG1oFNWObsEmcqo2RSWutr0M " />
                            </div>
                        </div>
                        <div className="mt-5 p-4 bg-[#131318] rounded-2xl border border-white/5 flex items-start gap-3 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                <span className="material-icons-round text-blue-400 text-lg">verified_user</span>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">Script Verified</h3>
                                <p className="text-[11px] text-gray-400 leading-snug">
                                    Render matches input script with 100% accuracy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Export Section */}
                    <div className="px-6 text-left">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="material-icons-round text-primary text-base">ios_share</span>
                            Export Format
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button className="relative p-4 rounded-2xl border border-violet-500/50 bg-violet-500/10 flex flex-col items-center justify-center gap-3 transition-all group shadow-glow">
                                <div className="absolute top-2.5 right-2.5 w-4 h-4 bg-violet-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="material-icons-round text-white text-[10px] font-bold">check</span>
                                </div>
                                <span className="material-icons-round text-violet-300 text-2xl group-hover:scale-110 transition-transform">smartphone</span>
                                <div className="text-center">
                                    <span className="block text-sm font-bold text-white">9:16 Vertical</span>
                                    <span className="block text-[10px] text-violet-200/60 mt-0.5">TikTok / Reels</span>
                                </div>
                            </button>
                            <button className="relative p-4 rounded-2xl border border-white/5 hover:border-white/10 bg-[#131318] hover:bg-[#1c1c24] flex flex-col items-center justify-center gap-3 transition-all group">
                                <span className="material-icons-round text-gray-500 text-2xl rotate-90 group-hover:text-gray-300 transition-colors font-display">smartphone</span>
                                <div className="text-center">
                                    <span className="block text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">16:9 Landscape</span>
                                    <span className="block text-[10px] text-gray-600 mt-0.5">YouTube</span>
                                </div>
                            </button>
                            <button className="relative p-4 rounded-2xl border border-white/5 hover:border-white/10 bg-[#131318] hover:bg-[#1c1c24] flex flex-col items-center justify-center gap-3 transition-all group">
                                <span className="material-icons-round text-gray-500 text-2xl group-hover:text-gray-300 transition-colors">crop_square</span>
                                <div className="text-center">
                                    <span className="block text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">1:1 Square</span>
                                    <span className="block text-[10px] text-gray-600 mt-0.5">Instagram Feed</span>
                                </div>
                            </button>
                            <button className="relative p-4 rounded-2xl border border-white/5 hover:border-white/10 bg-[#131318] hover:bg-[#1c1c24] flex flex-col items-center justify-center gap-3 transition-all group">
                                <span className="material-icons-round text-gray-500 text-2xl group-hover:text-gray-300 transition-colors">tune</span>
                                <div className="text-center">
                                    <span className="block text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">Custom</span>
                                    <span className="block text-[10px] text-gray-600 mt-0.5">Settings</span>
                                </div>
                            </button>
                        </div>
                        <div className="border-t border-white/5 pt-5 mb-8">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
                                <span>Encoding</span>
                                <span className="font-mono text-gray-400">H.264 / AAC</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
                                <span>Resolution</span>
                                <span className="font-mono text-gray-400">1080x1920 (FHD)</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Estimated Size</span>
                                <span className="font-mono text-gray-400">~18 MB</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-background-dark/90 backdrop-blur-xl border-t border-white/5 p-6 z-20 pb-8 w-full max-w-md mx-auto">
                    <div className="flex gap-4">
                        <button className="flex-1 bg-[#131318] hover:bg-[#1c1c24] text-white font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all border border-white/5" onClick={() => navigate('/editor')}>
                            <span className="material-icons-round text-lg text-gray-400">edit</span>
                            Edit Script
                        </button>
                        <button className="flex-[2] bg-purple-gradient hover:brightness-110 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                            <span className="material-icons-round text-lg">download</span>
                            Download Video
                        </button>
                    </div>
                    <div className="w-32 h-1 bg-white/10 rounded-full mx-auto mt-6"></div>
                </div>
            </div>
        </ScreenWrapper>
    );
}
