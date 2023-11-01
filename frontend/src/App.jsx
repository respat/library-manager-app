import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Upload from './components/Upload'

function App() {

  return (
      <div className='bg-slate-50 w-screen h-screen'>
        <Navbar />
        <div className="flex items-center justify-center">
        <Upload />
        </div>
      </div>
  )
}

export default App
