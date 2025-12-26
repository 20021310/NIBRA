import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';
import Input from '../components/Input';
import { useScript } from '../context/ScriptContext';

export default function Auth() {
    const navigate = useNavigate();
    const { login } = useScript();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(email);
        navigate('/dashboard');
    };

    return (
        <ScreenWrapper className="flex items-center justify-center min-h-screen px-6">
            <GlassPanel className="w-full max-w-[400px] p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mx-auto mb-6 shadow-glow flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary rounded-md" />
                    </div>
                    <h1 className="font-display font-bold text-3xl mb-2 text-shadow-glow">Script Sovereignty</h1>
                    <p className="text-text-muted text-sm">Deterministic AI Rendering Engine</p>
                </div>

                <div className="space-y-4 mb-8">
                    <Button variant="secondary" className="w-full">Continue with Google</Button>
                    <Button variant="secondary" className="w-full">Continue with Apple</Button>
                </div>

                <div className="flex items-center mb-8 gap-4">
                    <div className="h-px bg-white/10 flex-1" />
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">Or register securely</p>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                <div className="space-y-4 mb-6">
                    <Input
                        placeholder="Creator Email"
                        value={email}
                        onChange={setEmail}
                        icon="📧"
                    />
                    <Input
                        placeholder="Secure Password"
                        value={password}
                        onChange={setPassword}
                        type="password"
                        icon="🔒"
                    />
                </div>

                <Button
                    variant="primary"
                    onClick={handleLogin}
                    className="w-full mb-6"
                >
                    Initialize Creator Profile
                </Button>

                <p className="text-center text-xs opacity-60">
                    Already have access? <span className="text-primary font-bold cursor-pointer">Log in</span>
                </p>
            </GlassPanel>
        </ScreenWrapper>
    );
}
