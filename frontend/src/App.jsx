import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import User from './components/User/Main'
import Admin from './components/Admin/Main'
import Explore from './components/Explore/Main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
