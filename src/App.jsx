import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router'
import NotFound from './pages/NotFound'
import {  Home, House } from 'lucide-react'
import HomePage from './pages/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar/>
      <div className='flex-1'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
          
             
  )
}

export default App
