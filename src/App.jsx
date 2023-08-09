import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/cadastro' element={ <SignUpPage/> }/>
        <Route path='/login' element={ <SignInPage/> }/>
      </Routes>
    </>
  )
}

export default App
