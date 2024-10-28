// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap around your app
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState('dashboard'); // Initial state can be set as needed

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
