import React from 'react'
import Header from './component/header/header'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={ <Header/> } />
        <Route path="about" element={ <Header/> } />
        <Route path="contact" element={ <Header/> } />
    </Routes>

    <div>App</div>
    </>
  )
}

export default App