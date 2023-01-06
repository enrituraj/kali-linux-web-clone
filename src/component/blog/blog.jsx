import React from 'react'
import Navbar from '../navbar/navbar'

const Blog = (props) => {
  return (
    <>
      <Navbar bg="navbar-light"/>
      <h1>{props.name}</h1>
    </>
  )
}

export default Blog