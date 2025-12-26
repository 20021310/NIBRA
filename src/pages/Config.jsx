import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';

export default function Config() {
    const navigate = useNavigate();
    const [aspectRatio, setAspectRatio] = useState('16:9');
    const [resolution, setResolution] = useState('1080p');

    const handleRender = () => {
        navigate('/player');
    };

    const Option = ({ label, value, current, onSelect }) => (
        <button
            onClick={() => onSelect(value)}
            className={`flex-1 py-3 rounded-lg border transition-colors ${current === value
                    ? 'bg-primary border-primary text-white font-bold'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}
        >
            {label}
        </button>
    );

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display font-bold text-3xl mb-6">Configuration</h1>

                <GlassPanel className="p-6 mb-8">
                    <div className="mb-6">
                        <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Aspect Ratio</p>
                        <div className="flex gap-4">
                            <Option label="16:9 (Landscape)" value="16:9" current={aspectRatio} onSelect={setAspectRatio} />
                            <Option label="9:16 (Portrait)" value="9:16" current={aspectRatio} onSelect={setAspectRatio} />
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Resolution (Quality)</p>
                        <div className="flex gap-3">
                            <Option label="720p" value="720p" current={resolution} onSelect={setResolution} />
                            <Option label="1080p" value="1080p" current={resolution} onSelect={setResolution} />
                            <Option label="4K" value="4K" current={resolution} onSelect={setResolution} />
                        </div>
                    </div>

                    <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-500/30 mb-2">
                        <div className="flex justify-between mb-2">
                            <h3 className="font-display font-semibold">Total Cost</h3>
                            <h3 className="font-display font-semibold text-primary">450 cr</h3>
                        </div>
                        <p className="text-xs text-purple-200/60">Balance after render: 12,000 cr</p>
                    </div>
                </GlassPanel>

                <Button
                    variant="primary"
                    onClick={handleRender}
                    className="w-full shadow-glow-strong"
                >
                    INITIATE RENDER SEQUENCE
                </Button>
            </div>
        </ScreenWrapper>
    );
}
