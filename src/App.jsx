import React from 'react'
import Navbar from './Compotements/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Compotements/Pages/About'
import Contact from './Compotements/Pages/Contact'
import Help from './Compotements/Pages/Help'
import Home from './Compotements/Pages/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/help' element = {<Help/>}/>
        
      </Routes>

    </div>
  )
}

export default App