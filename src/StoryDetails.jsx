import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from './context/dataContext'
import { useParams } from 'react-router-dom'
import Story from './components/Story'
function StoryDetails() {
    const[post,setpost]=useState(null)
    const{id}=useParams()
    console.log(id);
    const {data}=useContext(DataContext)

useEffect(()=>{
    setpost(data.find((post)=>post.id==id))


},[data])
  return (

    <div>{
        
        post && <Story title={post.title} body={post.body} />
        }
      
    </div>
  )
}

export default StoryDetails
