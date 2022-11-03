import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
 
    
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, currentUser => {
              console.log(currentUser);
              setUser(currentUser)
        })
        return () => unsubscribe();
      }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        LoginUser,
        LoginWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;