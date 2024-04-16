import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {login} = useAuth()
    const navigate = useNavigate()
    const handleLogin=()=>{
        login().then(navigate('/profile'))

    }
  return (
    <div>
        this is login page
        <button className='border py-2 px-4 text-white bg-red-600' onClick={handleLogin}>login</button>
      
    </div>
  )
}

export default Login
