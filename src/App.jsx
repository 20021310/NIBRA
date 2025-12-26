import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScriptProvider } from './context/ScriptContext';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import Gallery from './pages/Gallery';
import Voices from './pages/Voices';
import Config from './pages/Config';
import Player from './pages/Player';
import './index.css';

function App() {
  return (
    <ScriptProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/voices" element={<Voices />} />
          <Route path="/config" element={<Config />} />
          <Route path="/player" element={<Player />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ScriptProvider>
  );
}

export default App;
