import React from 'react'
import ListItem from './ListItem'

const Card = () => {
    return (
        <div className='w-10/12 mt-5'>
        <div className='h-10 my-2 grid  items-center text-center' style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr auto" }}>
                <h1 className=' opacity-75 font-medium'>Cím</h1>
                <h1 className=' opacity-75 font-medium'>Szerző</h1>
                <h1 className=' opacity-75 font-medium'>Kategória</h1>
                <h1 className=' opacity-75 font-medium'>Kiadó</h1>
                <h1 className=' opacity-75 font-medium'>ISBN</h1>
                <h1 className=' opacity-75 font-medium'>Darabszám</h1>
                <div className='flex w-20 justify-evenly items-center'>
        </div>
            </div>
        <div className='mt-2 w-full h-full bg-white flex flex-col rounded shadow-sm border'>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            
        </div>
        </div>
    )
}

export default Card