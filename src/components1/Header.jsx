import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { nav } from '../asset/Data' 
import User from './User'
import logo from '../asset/logo.svg'

const Header = () => {
    window.addEventListener("scroll",function(){
        const header=this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY > 100)
    })
    
  return (
   <>
   <header className='header'>
   
<div className='container flex'>
<div className='log'>
    <img src={logo} width='100px'/>
</div>
<nav className='nav'>
    <ul>
        {nav.map((link) => (
            <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>

            </li>
        ))}
    </ul>
</nav>
<div className='account flexCenter'>
    <User/>
</div>

</div>


   </header>
   
   
   
   </>
  )
}

export default Header