import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <div className='header'>
        <img alt='' className='homePhoto'></img>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
    </div>
  )
}

export default Header