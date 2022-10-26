import React from 'react';
import { createContext } from 'react';
import { getAuth,signInWithEmailAndPassword } from '/firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const AuthProvider = ({children}) => {

    const LogInUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    


const authInfo={LogInUser}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;