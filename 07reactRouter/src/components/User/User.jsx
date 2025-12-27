import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  return (
    const {userid} = useParams();
    <div className='bg-gray-700 text-white text-3xl p-4'>
      User: {userid}
    </div>
  )
}

export default User
