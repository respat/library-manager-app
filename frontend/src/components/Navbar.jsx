import React from 'react'
import ProfileCard from './ProfileCard'

const Navbar = () => {
    return (
        <div className='w-screen h-16 bg-white flex justify-center items-center'>
            <div className="w-10/12 flex items-center h-full justify-between">
                <h1 className='text-xl font-bold'>Library</h1>
                <ProfileCard />
            </div>
        </div>
    )
}

export default Navbar