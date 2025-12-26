import { useNavigate, useSearchParams } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';

const voices = [
    { id: 'v1', name: 'ElevenLabs - Adam', accent: 'American', style: 'Deep & Narrational' },
    { id: 'v2', name: 'OpenAI - Shimmer', accent: 'American', style: 'Clear & Soft' },
    { id: 'v3', name: 'ElevenLabs - Rachel', accent: 'British', style: 'Professional' },
    { id: 'v4', name: 'Azure - Guy', accent: 'American', style: 'Newscaster' },
];

export default function Voices() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const avatarName = searchParams.get('avatar') || 'Selected Avatar';

    const handlePlaySample = (voiceName) => {
        alert(`Playing sample for ${voiceName}...`);
    };

    const handleSelect = () => {
        navigate('/config');
    };

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display font-bold text-3xl mb-2">Select Voice</h1>
                <p className="text-text-muted mb-6">
                    Pair a voice with <span className="text-primary font-bold">{avatarName}</span>.
                </p>

                <div className="space-y-4">
                    {voices.map((voice) => (
                        <GlassPanel key={voice.id} className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-display font-semibold text-lg">{voice.name}</h3>
                                    <div className="flex gap-2 mt-1">
                                        <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px] font-mono">{voice.accent}</span>
                                        <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px] font-mono">{voice.style}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handlePlaySample(voice.name)}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <span>▶</span>
                                </button>
                            </div>

                            <Button
                                variant="secondary"
                                onClick={handleSelect}
                                className="w-full py-2.5 text-xs"
                            >
                                Select Voice
                            </Button>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </ScreenWrapper>
    );
}
