import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { signOut } from "firebase/auth/cordova";
import axios from "axios";
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false)
            //if user exists assign a token
            if (currentUser) {

                axios.post('https://car-doctor-server-jade-psi.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token-res', res.data)
                    })
            }
            else {
                axios.post('https://car-doctor-server-jade-psi.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;