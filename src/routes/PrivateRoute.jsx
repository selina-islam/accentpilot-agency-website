import React, { useContext } from 'react'
import { AuthContexts } from '../context/AuthContext'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const{user}= useContext(AuthContexts)
  return user ? children : <Navigate to='/'/>
}

export default PrivateRoute