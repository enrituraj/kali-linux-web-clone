import React from 'react'
import Header from './component/header/header'
import { Routes, Route } from "react-router-dom"
import GetKali from './component/get-kali/get-kali'

const App = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={ <Header/> } />
        <Route path="get-kali" element={ <GetKali/> } />
        <Route path="contact" element={ <Header/> } />
    </Routes>

    </>
  )
}

export default App