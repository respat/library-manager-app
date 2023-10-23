import React from 'react'
import editItem from '../assets/pencil.svg'
import deleteItem from '../assets/trash.svg'

const ListItem = () => {
  return (
    <div className='h-14 border-t grid  items-center text-center' style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr auto" }}>
        <h1 className=' font-semibold'>NE AGYALD TÚL!</h1>
        <h1 className=' font-semibold'>Nick Trenton</h1>
        <h1 className=' font-semibold'>ÖNFEJLESZTÉS</h1>
        <h1 className=' font-semibold'>Édesvíz kiadó</h1>
        <h1 className=' font-semibold'>9789635072637</h1>
        <h1 className=' font-semibold'>32</h1>
        <div className='flex w-20 justify-evenly items-center'>
            <img className='h-4 w-4' src={editItem} alt="" />
            <img className='h-4 w-4' src={deleteItem} alt="" />
        </div>

    </div>
  )
}

export default ListItem