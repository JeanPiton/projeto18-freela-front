import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import UserProvider from './contexts/UserContext'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path='/cadastro' element={ <SignUpPage/> }/>
          <Route path='/login' element={ <SignInPage/> }/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
