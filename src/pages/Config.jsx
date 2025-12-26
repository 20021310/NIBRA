import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Config() {
    const navigate = useNavigate();
    const [isRendering, setIsRendering] = useState(false);

    const startRendering = () => {
        setIsRendering(true);
        setTimeout(() => {
            setIsRendering(false);
            navigate('/player');
        }, 3000);
    };

    return (
        <ScreenWrapper className="px-6">
            <div className="w-full max-w-md h-full min-h-screen relative z-10 flex flex-col p-0">
                <header className="flex items-center justify-between mb-8 pt-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-highlight text-text-muted transition-colors border border-transparent hover:border-border-dark" onClick={() => navigate('/voices')}>
                        <span className="material-icons-round text-[20px]">arrow_back</span>
                    </button>
                    <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted opacity-80 font-display">Configuration</h1>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-highlight text-text-muted transition-colors border border-transparent hover:border-border-dark">
                        <span className="material-icons-round text-[20px]">more_vert</span>
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto no-scrollbar pb-32 text-left">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-3 text-white tracking-tight font-display">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#9333ea]">Render?</span></h2>
                        <p className="text-text-muted text-sm leading-relaxed max-w-[90%]">Review your settings before initiating the AI generation pipeline. Script intent is locked.</p>
                    </div>

                    <div className="bg-surface-dark border border-border-dark rounded-3xl p-6 shadow-xl relative overflow-hidden mb-6 group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-surface-highlight border border-border-dark flex items-center justify-center shadow-lg shadow-black/50">
                                <span className="material-icons-round text-primary text-2xl">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg font-display">Neo-Tokyo Pitch</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <p className="text-xs text-text-muted font-mono tracking-wide">#8829-AV-GEN</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 relative z-10">
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Avatar Model</span>
                                <div className="flex items-center gap-2 bg-surface-highlight py-1.5 px-3 rounded-lg border border-border-dark/50">
                                    <img alt="Avatar Face" className="w-5 h-5 rounded-full ring-1 ring-border-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Pg9bwwHKroGxIvyRRF9eoRWmS5NYVk9CpkaxW5EvUmPLnDlZGRJ_Tu3SAohXKywfBmH2yBweKu4PMvq81SwwkkYLvU4wqQVl2Q3T5d_z_QPbj55-puNNc5NEQfoXshNXSfM2z2oOnXgtHP2zlNGdsd6tBOojuSZYewoJCtOcldk6kI2hMDamV1_are2KhubJYBed5vPMMhCsy6pgktKogvtN05ywd1-PGa89Qw6sHLq018x0ajXhpwMCvEGTxTqYFygeD3Se42w " />
                                    <span className="text-sm font-medium text-gray-200">Sarah (Pro)</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-dark"></div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Voice Engine</span>
                                <span className="text-sm font-medium text-gray-200">ElevenLabs V2 - Calm</span>
                            </div>
                            <div className="w-full h-px bg-border-dark"></div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Resolution</span>
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">4K</span>
                                    <span class="text-sm font-medium text-gray-200">1080x1920</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-dark"></div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-text-muted font-medium">Script Length</span>
                                <span className="text-sm font-medium text-gray-200">1m 24s <span className="text-text-muted text-xs font-normal ml-1">(248 words)</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-surface-dark border border-border-dark p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
                            <div className="flex items-center gap-2 mb-3 text-primary relative z-10">
                                <span className="material-icons-round text-[20px]">timer</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Est. Time</span>
                            </div>
                            <div className="relative z-10">
                                <span className="text-2xl font-bold text-white tracking-tight">~3.5 min</span>
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <p className="text-[10px] text-text-muted">Queue Depth: Low</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-border-dark p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-green-500/30 transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
                            <div className="flex items-center gap-2 mb-3 text-green-400 relative z-10">
                                <span className="material-icons-round text-[20px]">bolt</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Cost</span>
                            </div>
                            <div className="relative z-10">
                                <span className="text-2xl font-bold text-white tracking-tight">45 Credits</span>
                                <p className="text-[10px] text-text-muted mt-2">Balance: 2,400</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-highlight/50 border border-border-dark rounded-2xl p-4 flex gap-3 items-start backdrop-blur-sm">
                        <span className="material-icons-round text-primary text-[20px] mt-0.5 shrink-0">info</span>
                        <p className="text-xs text-text-muted leading-relaxed">
                            <strong className="text-gray-200 font-semibold block mb-1">Script Sovereignty Active</strong>
                            Your script will be rendered exactly as input. AI will perform deterministic lip-syncing without creative alterations.
                        </p>
                    </div>
                </main>

                <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background-dark via-background-dark to-transparent pt-20 z-20 pointer-events-none flex justify-center">
                    <div className="w-full max-w-md pointer-events-auto">
                        <button className="group w-full bg-purple-gradient hover:brightness-110 text-white font-semibold py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden border border-white/10" onClick={startRendering}>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 text-lg tracking-wide">Start Rendering</span>
                            <span className="material-icons-round relative z-10 group-hover:translate-x-1 transition-transform group-hover:-translate-y-1">rocket_launch</span>
                        </button>
                    </div>
                </div>

                {/* Processing Overlay */}
                {isRendering && (
                    <div className="fixed inset-0 z-50 bg-background-dark/80 backdrop-blur-md flex flex-col items-center justify-center p-8 transition-opacity duration-300">
                        <div className="w-full max-w-xs text-center bg-surface-dark border border-border-dark p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
                            <div className="relative w-24 h-24 mx-auto mb-8">
                                <div className="absolute inset-0 rounded-full border-4 border-surface-highlight"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-icons-round text-3xl text-primary animate-pulse">auto_awesome</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Rendering Avatar</h3>
                            <p className="text-xs text-text-muted mb-8 font-mono">Initializing GPU cluster...</p>
                            <div className="w-full space-y-5">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                        <span className="material-icons-round text-white text-[14px]">check</span>
                                    </div>
                                    <span className="text-sm font-medium text-white flex-1 text-left">Script Analysis</span>
                                    <span className="text-[10px] text-text-muted uppercase tracking-wider">Done</span>
                                </div>
                                <div className="flex items-center gap-3 text-left">
                                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center relative">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-ping absolute"></div>
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    </div>
                                    <span className="text-sm font-medium text-white flex-1">Audio Synthesis</span>
                                    <span className="text-[10px] text-primary animate-pulse uppercase tracking-wider font-bold">Processing</span>
                                </div>
                                <div className="flex items-center gap-3 opacity-30 text-left">
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-700 bg-surface-highlight"></div>
                                    <span className="text-sm text-gray-400 flex-1">Video Rendering</span>
                                </div>
                                <div className="flex items-center gap-3 opacity-30 text-left">
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-700 bg-surface-highlight"></div>
                                    <span className="text-sm text-gray-400 flex-1">Final Assembly</span>
                                </div>
                            </div>
                            <button className="mt-10 text-xs text-text-muted hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" onClick={() => setIsRendering(false)}>Cancel Operation</button>
                        </div>
                    </div>
                )}
            </div>
        </ScreenWrapper>
    );
}
