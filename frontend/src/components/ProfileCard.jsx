import React from 'react'
import user from '../assets/user.svg'
import downArrow from '../assets/angle-small-down.svg'

const ProfileCard = () => {
  return (
    <div className='border rounded px-3 py-2 flex items-center justify-between cursor-pointer'>
        <div className='rounded-xl w-6 h-6 border flex justify-center items-center'>
            <img className='w-4 h-4' src={user} alt="Logo" />
        </div>
        <h1 className='mx-2 font-medium text-sm'>Resperger Patrik</h1>
        <img className='w-4 h-4' src={downArrow} alt="Logo" />
    </div>
  )
}

export default ProfileCard