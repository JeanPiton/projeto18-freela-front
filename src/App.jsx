import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/cadastro' element={ <SignUpPage/> }/>
      </Routes>
    </>
  )
}

export default App
