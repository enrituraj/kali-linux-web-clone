import React from 'react'
import Header from './component/header/header'
import Blog from './component/blog/blog'
import { Routes, Route } from "react-router-dom"
import GetKali from './component/get-kali/get-kali'

const App = () => {
  return (
    <>
    
    <Routes>
        <Route exact path="/" element={ <Header/> } />
        <Route exact path="get-kali" element={ <GetKali/> } />
        <Route exact path="blog" element={ <Blog name="blg"/> } />
    </Routes>

    </>
  )
}

export default App