import React from 'react'
import { Link } from 'react-router-dom'

function Story({title,body,id}) {

  return (
    <div className='bg-slate-300 p-1 m-3 max-w-48 relative pb-16'>
        <h3 className='font-bold'>{title}</h3>
        <p>{body}</p>
        <Link to={`${id}`}><button  className='border rounded-3xl bg-red-500 py-2 px-4 text-white absolute bottom-2'>Read More</button></Link>
    </div>
  )
}

export default Story
