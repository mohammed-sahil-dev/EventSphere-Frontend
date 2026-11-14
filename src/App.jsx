import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router'
import NotFound from './pages/NotFound'
import { House } from 'lucide-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
          
             
  )
}

export default App
