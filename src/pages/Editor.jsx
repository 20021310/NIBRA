import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import { useScript } from '../context/ScriptContext';

export default function Editor() {
    const navigate = useNavigate();
    const { currentScript, setCurrentScript } = useScript();
    const [script, setScript] = useState(currentScript || `Welcome to the future of deterministic video generation. 
Here, your words are law. No hallucinations, no creative liberties. Just pure, sovereign intent rendered into reality.
This update introduces a new hashing protocol. Once you lock this script, a SHA-256 hash is generated, ensuring the integrity of your message from input to final render.
Are you ready to commit?`);

    const handleLock = () => {
        const hash = '8f4a' + Math.random().toString(36).substring(2, 6) + '2c91';
        setCurrentScript(script);
        alert(`Script locked successfully!\nHash: ${hash}\n\nProceeding to avatar selection...`);
        navigate('/gallery');
    };

    return (
        <ScreenWrapper className="px-0">
            <div className="w-full max-w-md mx-auto min-h-screen relative pb-32 overflow-hidden flex flex-col">
                {/* Ambient Glow */}
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-glow pointer-events-none z-0"></div>

                {/* Header */}
                <header className="fixed top-0 max-w-md w-full z-50 px-6 py-4 flex items-center justify-between glass-panel">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors text-muted hover:text-white" onClick={() => navigate('/dashboard')}>
                            <span className="material-icons-round text-xl">arrow_back</span>
                        </button>
                        <h1 className="text-sm font-semibold tracking-wide uppercase text-muted font-display">New Project</h1>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-green-900/20 text-green-400 border border-green-800/40 shadow-[0_0_10px_-3px_rgba(74,222,128,0.2)]">Draft</span>
                        <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted hover:text-white">
                            <span className="material-icons-round text-xl">more_vert</span>
                        </button>
                    </div>
                </header>

                <main className="pt-24 pb-32 px-5 h-screen flex flex-col relative z-10 w-full">
                    <div className="mb-6 space-y-1">
                        <h2 className="text-3xl font-bold font-display tracking-tight text-white flex items-center">
                            Script Editor <div className="w-2 h-2 rounded-full bg-primary ml-2 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]"></div>
                        </h2>
                        <p className="text-sm text-muted leading-relaxed">The AI renders exactly what is typed.</p>
                    </div>

                    <div className="flex-1 relative group flex flex-col mb-4">
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-2xl opacity-50 blur-sm"></div>
                        <div className="relative flex-1 flex flex-col bg-surface-dark rounded-2xl border border-white/5 overflow-hidden shadow-2xl shadow-black/50">
                            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-surface-highlight/30">
                                <div className="flex space-x-5 text-xs font-mono text-muted">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-icons-round text-base text-primary">timer</span>
                                        <span className="text-gray-300">00:42</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="material-icons-round text-base text-primary">text_fields</span>
                                        <span className="text-gray-300">{script.length} chars</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1 bg-black/20 rounded-lg p-0.5 border border-white/5">
                                    <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-all">
                                        <span className="material-icons-round text-lg">hourglass_empty</span>
                                    </button>
                                    <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-all">
                                        <span className="material-icons-round text-lg">record_voice_over</span>
                                    </button>
                                </div>
                            </div>
                            <textarea
                                className="script-area flex-1 w-full p-5 bg-transparent border-none resize-none focus:ring-0 text-sm md:text-base font-mono leading-relaxed text-gray-200 placeholder-gray-600 selection:bg-primary/30"
                                placeholder="Begin typing your script here..."
                                spellCheck="false"
                                value={script}
                                onChange={(e) => setScript(e.target.value)}
                            />
                            <div className="absolute bottom-4 right-4 pointer-events-none">
                                <span className="text-[10px] font-mono text-purple-300 bg-primary/10 px-2 py-1 rounded border border-primary/20 backdrop-blur-md shadow-glow-sm">ID: 8f4a...2c91</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <div className="flex items-start space-x-3 px-1">
                            <span className="material-icons-round text-primary text-xl mt-0.5 shadow-primary/50" style={{ textShadow: '0 0 10px rgba(168,85,247,0.5)' }}>lock_clock</span>
                            <p className="text-xs text-muted">
                                Locking transforms this script into an <span className="text-white font-medium">immutable state</span>. A unique identifier will be generated and stored.
                            </p>
                        </div>
                        <button className="relative w-full group" onClick={handleLock}>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl opacity-60 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                            <div className="relative w-full py-4 bg-surface-dark rounded-xl border border-primary/30 flex items-center justify-center space-x-3 transition-transform active:scale-[0.98] group-hover:bg-surface-highlight">
                                <span className="material-icons-round text-white group-hover:text-primary transition-colors">lock</span>
                                <span className="font-bold text-white tracking-wide text-sm group-hover:text-white transition-colors">LOCK SCRIPT & GENERATE HASH</span>
                            </div>
                        </button>
                    </div>
                </main>

                <nav className="fixed bottom-0 w-full max-w-md nav-glass pb-safe pt-2 px-6 pb-6 z-50 glass-panel border-t border-white/5">
                    <div className="flex justify-between items-center max-w-md mx-auto">
                        <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group" onClick={() => navigate('/dashboard')}>
                            <span className="material-icons-round group-hover:scale-110 transition-transform">dashboard</span>
                            <span className="text-[10px] font-medium tracking-wide">Home</span>
                        </button>
                        <button className="flex flex-col items-center space-y-1.5 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                            <span className="material-icons-round scale-110">edit_note</span>
                            <span className="text-[10px] font-medium tracking-wide">Script</span>
                        </button>
                        <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group" onClick={() => navigate('/config')}>
                            <span className="material-icons-round group-hover:scale-110 transition-transform">movie_filter</span>
                            <span className="text-[10px] font-medium tracking-wide">Render</span>
                        </button>
                        <button className="flex flex-col items-center space-y-1.5 text-muted hover:text-white transition-colors group" onClick={() => navigate('/gallery')}>
                            <span className="material-icons-round group-hover:scale-110 transition-transform">person</span>
                            <span className="text-[10px] font-medium tracking-wide">Avatar</span>
                        </button>
                    </div>
                </nav>
            </div>
        </ScreenWrapper>
    );
}
