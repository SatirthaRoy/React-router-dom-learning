import React from 'react'
import {useLoaderData, Link, useNavigate} from 'react-router-dom'

const User = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='p-4 border border-blue-500 rounded shadow text-base'>
      <h1>NAME:{user.name}</h1>
      <h1>WEBSITE:{user.website}</h1>
      <Link to={`/user/${user.id}`}>Details</Link>
      <button onClick={() => navigate(`/user/${user.id}`)} className='bg-gray-300 p-4'>navigate</button>
    </div>
  )
}

const Users = () => {
  const users = useLoaderData();
  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        users.map(user => <User key={user.id} user ={user}/>)
      }
    </div>
  )
}

export default Users