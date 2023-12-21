import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import User from './components/User/Main'
import Admin from './components/Admin/Main'
import Explore from './components/Explore/Main'
import Login from './components/Forms/Login'
import SignUp from './components/Forms/Signup'
import AddMobile from './components/Forms/AddMobile'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mobile/add' element={<AddMobile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
