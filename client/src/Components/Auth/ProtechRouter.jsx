import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtechRouter = ({children,user, redirect = "/login"}) =>{
    if(!user) return <Navigate to={redirect}/>
    return children ? children : <Outlet/>
}

export default ProtechRouter