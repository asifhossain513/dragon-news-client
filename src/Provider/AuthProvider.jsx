import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
      setLoading(true);
    };
    const logInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = ()=> {
      return signOut(auth);
      setLoading(true);

    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged user in observer ', loggedUser);
        setUser(loggedUser);
        setLoading(false)
      })
      return() => {
        unsubscribe();
      }
    })
    const authInfo = {
      user,
      loading,
      createUser,
      logInUser,
      logOut
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;