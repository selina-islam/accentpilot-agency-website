import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContexts=createContext()
const auth=getAuth(app)

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    // register with email & password
const createUser=(email,password)=>{
   return  createUserWithEmailAndPassword(auth, email, password)
}

// login with email & password

const userLogin=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}


// sign in with google
const goggleLogin=()=>{
        const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}

// monitor or manage user
useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth, (currentUser) => {
 setUser(currentUser)
   setLoading(false)
});
return  unsubscribe
},[auth])



// logout functionality

const logOut=()=>{
    return signOut(auth)
}

    const value={
            user,
            createUser,
            userLogin,
            goggleLogin,
            logOut
    }
    return(
        <AuthContexts.Provider value={value}>
                {!loading && children}
        </AuthContexts.Provider>
    )
}

export default AuthProvider;