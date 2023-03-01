import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        createUser,
        emailSignIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;