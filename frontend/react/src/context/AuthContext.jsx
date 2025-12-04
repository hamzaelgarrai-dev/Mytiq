import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

    useEffect(() => {
        if (token) {
            localStorage.setItem('authToken', token);
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
        }
    }, [token]);

    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
    };

    const logout = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('authToken');
    };

    const value = {
        user,
        token,
        isAuthenticated,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
