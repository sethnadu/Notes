import React, {useEffect, useState} from "react";
import app from './base'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, [])
    console.log(process.env.REACT_APP_FIREBASE_KEY)
    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
            >
                {children}
            </AuthContext.Provider>

    )
}