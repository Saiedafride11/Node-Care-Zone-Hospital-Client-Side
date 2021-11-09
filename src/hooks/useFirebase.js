import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
        onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            
            const newUser = {email, displayName: name}
            setUser(newUser)
            // Update name
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
              
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message)
            // ..
        })
        .finally( () => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally( () => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        })
        .finally( () => setIsLoading(false));;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally( () => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;