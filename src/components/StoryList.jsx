import React, { useEffect, useState } from 'react'
import Story from './Story'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'

function StoryList() {
    const{data,setData}=useContext(DataContext)
    const[stories,setStories]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            res.json().then((result)=>{
                console.log(result);
                setStories(result)
                setData(result)
            })
        })
    },[])
  return (
    <div className='flex flex-wrap bg-blue-200'>
    {
        stories?.length>0 ? stories.map((story,key)=>{
            return(
                <Story key={key} title={story.title} body={story.body} id={story.id}  />
            )
        }): <p>empty</p>
    }
    </div>
  )
}

export default StoryList
