import React, { useEffect } from 'react';
import app from '../../firebase/firebase.init';
import { createContext } from 'react';
import { getAuth,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged,updateProfile } from 'firebase/auth';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
           }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
},[])




    const LogInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const SignInWithGoogle = (provider) => {
        setLoading(true)

        return signInWithPopup(auth,provider)
    }
    
    const SignInWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const UpdateUserProfile = Profile => {
        return updateProfile(auth.currentUser,Profile)
    }     


const authInfo={LogInUser,setLoading,logOut,user,setUser,createUser,SignInWithGoogle,UpdateUserProfile,SignInWithGithub}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;