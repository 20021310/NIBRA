import React, { createContext, useContext, useState } from 'react';

const ScriptContext = createContext();

export function useScript() {
    return useContext(ScriptContext);
}

export function ScriptProvider({ children }) {
    const [user, setUser] = useState(null);
    const [currentScript, setCurrentScript] = useState("");
    const [projects, setProjects] = useState([
        { id: 1, title: "Product Launch V2", status: "Rendering", progress: 0.78, avatar: "Sarah (Pro)", time: "3m ago" },
        { id: 2, title: "Q3 Quarterly Review", status: "Ready", progress: 1.0, avatar: "Sarah (Business)", time: "2h ago" },
        { id: 3, title: "Internal Memo #42", status: "Queued", progress: 0.0, avatar: "Marcus (Casual)", time: "1d ago" },
    ]);

    const login = (email) => {
        setUser({ email, name: "Creator", tier: "Pro" });
    };

    const addProject = (project) => {
        setProjects([project, ...projects]);
    };

    return (
        <ScriptContext.Provider value={{
            user,
            login,
            currentScript,
            setCurrentScript,
            projects,
            addProject
        }}>
            {children}
        </ScriptContext.Provider>
    );
}
