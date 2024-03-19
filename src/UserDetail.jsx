import React from 'react'
import {useLoaderData, useNavigate} from 'react-router-dom'

const UserDetail = () => {
  const  navigate = useNavigate();
  const loader = useLoaderData();
  return (
    <div>
      <h1 className='text-3xl'>NAME: {loader.name}</h1>
      <h1>web: {loader.website}</h1>
      <button onClick={()=> navigate(-1)} className='bg-gray-300 p-4'>Back</button>
    </div>
  )
}

export default UserDetail