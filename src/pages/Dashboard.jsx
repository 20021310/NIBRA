import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';
import { useScript } from '../context/ScriptContext';

export default function Dashboard() {
    const navigate = useNavigate();
    const { projects } = useScript();

    return (
        <ScreenWrapper className="px-6 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <p className="text-purple-300/80 text-xs uppercase tracking-wider mb-1">Rendering Balance</p>
                        <h1 className="font-display font-bold text-4xl">
                            12,450 <span className="text-slate-400 text-xl">cr</span>
                        </h1>
                    </div>
                    <Button variant="secondary" className="py-2 px-4 rounded-full text-xs">Top Up</Button>
                </div>

                {/* Live Status Card */}
                <div className="mb-8">
                    <GlassPanel className="p-6 bg-gradient-to-b from-surface-card to-[#130b2e] border-blue-500/20">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                                <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Rendering Live</p>
                            </div>
                        </div>
                        <h2 className="font-display font-semibold text-xl mb-1">Product Launch V2</h2>
                        <p className="text-xs text-slate-400 mb-6">Determining lip-sync vectors...</p>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono text-purple-200">
                                <span>Processing</span>
                                <span>78%</span>
                            </div>
                            <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-white/5">
                                <div className="bg-primary h-full rounded-full" style={{ width: '78%' }} />
                            </div>
                        </div>
                    </GlassPanel>
                </div>

                {/* Projects List */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-display font-semibold text-lg">Recent Renders</h3>
                    <p className="text-xs text-primary uppercase tracking-wider cursor-pointer">View History</p>
                </div>

                <div className="space-y-4 mb-8">
                    {projects.map((project) => (
                        <GlassPanel key={project.id} className="p-4 flex gap-4 hover:border-primary/40 transition-colors cursor-pointer">
                            <div className="w-20 h-20 rounded-xl bg-slate-800 shadow-inner overflow-hidden">
                                <div className="w-full h-full bg-white/5" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h4 className="font-display font-semibold text-base">{project.title}</h4>
                                    <p className="text-xs text-slate-400 mt-1">Avatar: {project.avatar}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${project.status === 'Ready' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                                            'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                        }`}>
                                        {project.status}
                                    </div>
                                </div>
                            </div>
                        </GlassPanel>
                    ))}
                </div>

                {/* New Project Button */}
                <Button
                    variant="primary"
                    onClick={() => navigate('/editor')}
                    className="w-full"
                >
                    New Project
                </Button>
            </div>
        </ScreenWrapper>
    );
}
