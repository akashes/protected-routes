import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const {logout} = useAuth()
     const handleLogout=()=>{
        logout().then(navigate('/'))

     }
  return (
    <div>
      <h2>this is a protected Route</h2>
      <button onClick={handleLogout} className='bg-red-500 border p-3 shadow-xl'>logout</button>
    </div>

  )
}

export default Profile
