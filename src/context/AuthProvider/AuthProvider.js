import React from 'react';
import app from '../../firebase/firebase.init';
import { createContext } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogInUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    


const authInfo={LogInUser,createUser}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;