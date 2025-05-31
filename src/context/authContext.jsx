/* eslint-disable no-useless-catch */
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {

    const signUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error;
        }
    }

    return (
        <authContext.Provider value={{ signUp, login }}>
            {children}
        </authContext.Provider>
    );
}

