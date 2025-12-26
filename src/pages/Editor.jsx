import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';
import { useScript } from '../context/ScriptContext';

export default function Editor() {
    const navigate = useNavigate();
    const { currentScript, setCurrentScript } = useScript();
    const [script, setScript] = useState(currentScript || "Welcome to the future of deterministic video generation.\nHere, your words are law. No hallucinations, no creative liberties. Just pure, sovereign intent rendered into reality.\n\nAre you ready to commit?");

    const handleLock = () => {
        const hash = '8f4a' + Math.random().toString(36).substring(2, 6) + '2c91';
        setCurrentScript(script);
        alert(`Script Locked!\n\nHash: ${hash}\n\nProceeding to avatar selection...`);
        navigate('/gallery');
    };

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="font-display font-bold text-3xl mb-2">Script Editor</h1>
                    <p className="text-text-muted text-sm">The AI renders exactly what is typed.</p>
                </div>

                <div className="mb-6">
                    <GlassPanel className="overflow-hidden">
                        <div className="px-4 py-3 border-b border-white/5 flex justify-between bg-surface-highlight/30">
                            <div className="flex gap-4 text-xs font-mono text-purple-200">
                                <span>00:42</span>
                                <span>{script.length} chars</span>
                            </div>
                        </div>
                        <textarea
                            className="w-full p-5 bg-transparent text-gray-200 text-base font-mono leading-relaxed resize-none outline-none min-h-[400px]"
                            placeholder="Begin typing your script here..."
                            value={script}
                            onChange={(e) => setScript(e.target.value)}
                        />
                        <div className="absolute bottom-4 right-4">
                            <div className="bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                <p className="text-primary text-[10px] font-mono">ID: 8f4a...</p>
                            </div>
                        </div>
                    </GlassPanel>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-3 px-1">
                        <p className="text-xs flex-1 text-text-muted">
                            Locking transforms this script into an <span className="text-white font-bold">immutable state</span>. A unique identifier will be generated.
                        </p>
                    </div>
                    <Button
                        variant="primary"
                        onClick={handleLock}
                        className="w-full"
                    >
                        LOCK SCRIPT & GENERATE HASH
                    </Button>
                </div>
            </div>
        </ScreenWrapper>
    );
}
