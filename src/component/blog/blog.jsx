import React from 'react'
import Navbar from '../navbar/navbar'
import './blog.scss'
import blog_data  from './blog_data'
const Blog = () => {
  return (
    <>
      <Navbar bg="navbar-light" />
      <h1 className='page-title'>Kali Linux Blog</h1>
      <div className="blog_main">

        {blog_data.map(data => {
          return (
            <>
              <div className="blog_card" key={data.key}>
                <img src={data.img} alt="" />
                <h6 className='date'>{data.date}</h6>
                <h4 className='main_text'>{data.main_text}</h4>
                <p className='desc'>{data.desc}</p>
                <button className='btn-blog'>READ MORE</button>
              </div>
            </>
          )

        })}

      </div>
    </>
  )
}

export default Blog