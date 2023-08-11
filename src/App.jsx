import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import UserProvider from './contexts/UserContext'
import Navbar from './components/Navbar'
import ModelsPage from './pages/ModelsPage'
import ModelPage from './pages/ModelPage'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path='/cadastro' element={ <SignUpPage/> }/>
          <Route path='/login' element={ <SignInPage/> }/>
          <Route path='/model/:id' element={ <ModelPage/> }/>
          <Route path='/' element={ <ModelsPage/> }/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
