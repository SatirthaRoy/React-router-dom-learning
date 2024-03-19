import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Photos = () => {
  const loader = useLoaderData();
  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        loader.map(photo => {
          return <div key={photo.id} className='p-4 border border-red-400 rounded-xl'>
            <img src={photo.url} alt="" />
            <h1>{photo.title}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Photos