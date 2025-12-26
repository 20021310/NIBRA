import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';

const avatars = [
    { id: 1, name: 'Sarah', role: 'Professional', color: '#a855f7' },
    { id: 2, name: 'Marcus', role: 'Casual', color: '#3b82f6' },
    { id: 3, name: 'Elena', role: 'Expressive', color: '#ec4899' },
    { id: 4, name: 'David', role: 'Formal', color: '#10b981' },
    { id: 5, name: 'Aria', role: 'Creative', color: '#f59e0b' },
    { id: 6, name: 'James', role: 'News', color: '#6366f1' },
];

export default function Gallery() {
    const navigate = useNavigate();

    const handleSelect = (avatar) => {
        navigate(`/voices?avatar=${avatar.name}`);
    };

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display font-bold text-3xl mb-2">Select Avatar</h1>
                <p className="text-text-muted mb-6">Choose the persona that will embody your script.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            onClick={() => handleSelect(avatar)}
                            className="cursor-pointer"
                        >
                            <GlassPanel className="p-4 hover:border-primary/50 transition-colors">
                                <div
                                    className="w-full aspect-square rounded-xl mb-3 flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: avatar.color }}
                                >
                                    <span className="text-4xl opacity-50 font-display font-bold">{avatar.name[0]}</span>
                                </div>
                                <h3 className="font-display font-semibold text-center mb-0.5">{avatar.name}</h3>
                                <p className="text-[10px] text-center font-mono opacity-70">{avatar.role}</p>
                            </GlassPanel>
                        </div>
                    ))}
                </div>
            </div>
        </ScreenWrapper>
    );
}
