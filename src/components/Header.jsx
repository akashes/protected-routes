import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()
    console.log('location',pathname);
    const content=(
        <header className='p-5 bg-slate-100 flex justify-between px-5 items-center '>
        <Link to='/'>
            <h1 className='text-3xl font-bold'>Site Name</h1>
        </Link>
        <ul className='flex gap-5 '>
            {/* <Link to="/">
            <li>Home</li>

            </Link> */}
            <NavLink className={({isActive})=>isActive ? 'text-blue-500' : " text-gray-500"} to ='/' >Home</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-blue-500' : " text-gray-500"} to ='/about' >About</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-blue-500' : " text-gray-500"} to ='/stories' >Stories</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-blue-500' : " text-gray-500"} to ='/profile' >Profile</NavLink>
           
           
        </ul>
      </header>

    )
  return content
}

export default Header

