import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import UserProvider from './contexts/UserContext'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/cadastro' element={ <SignUpPage/> }/>
          <Route path='/login' element={ <SignInPage/> }/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
