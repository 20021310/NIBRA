import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';

export default function Player() {
    const navigate = useNavigate();

    const handleDownload = () => {
        alert("Video saved to device!");
    };

    const handleFinish = () => {
        navigate('/dashboard');
    };

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display font-bold text-3xl mb-6">Render Complete</h1>

                <GlassPanel className="overflow-hidden aspect-video bg-black rounded-2xl border border-white/20 shadow-2xl mb-8 relative">
                    <video
                        className="w-full h-full"
                        controls
                        src="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                    />
                </GlassPanel>

                <div className="px-2 mb-8">
                    <h2 className="font-display font-semibold text-xl mb-2">Product_Launch_V2_Final.mp4</h2>
                    <p className="text-sm text-slate-400 mb-6">Rendered successfully in 4m 12s.</p>

                    <div className="flex gap-4 mb-4">
                        <GlassPanel className="flex-1 p-3 text-center">
                            <p className="text-xs font-mono text-slate-400">Resolution</p>
                            <p className="font-display font-semibold text-lg">1080p</p>
                        </GlassPanel>
                        <GlassPanel className="flex-1 p-3 text-center">
                            <p className="text-xs font-mono text-slate-400">Size</p>
                            <p className="font-display font-semibold text-lg">42 MB</p>
                        </GlassPanel>
                    </div>
                </div>

                <div className="space-y-4">
                    <Button variant="primary" onClick={handleDownload} className="w-full">
                        DOWNLOAD TO DEVICE
                    </Button>
                    <Button variant="secondary" onClick={handleFinish} className="w-full">
                        Return to Dashboard
                    </Button>
                </div>
            </div>
        </ScreenWrapper>
    );
}
