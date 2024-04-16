import React, { useState } from 'react'
import useAuth  from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const {authed}=useAuth()
  return (
    <div>
        {
          authed ? <div>{children}</div> : <Navigate to ='/login'/>

        }
      
    </div>
  )
}

export default Protected
