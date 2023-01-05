import React from 'react'
import "./Navbar.scss"
import Style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav > 
        <ul className='navbar'>
          <li className='list-item'><a className='link' href='/'>home</a></li>
          <li className='list-item'><a className='link' href='/about'>about me</a></li>
          <li className='list-item'><a className='link' href='/'></a></li>
          <li className='list-item'><a className='link' href='/'>portfolio</a></li>
          <li className='list-item'><a className='link' href='/'>ll</a></li>
        </ul>
    </nav>
  )
}

export default Navbar