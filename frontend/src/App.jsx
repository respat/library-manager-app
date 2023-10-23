import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

  return (
      <div className=' bg-slate-50 w-screen h-screen'>
        <Navbar />
        <div className="flex items-center justify-center">
        <Card />
        </div>
      </div>
  )
}

export default App
