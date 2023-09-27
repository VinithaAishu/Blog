import React from "react"
import "./login.css"
import back from '../../asset/images/my-account.jpg'
import { Link } from "react-router-dom"

 const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='containers'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span> email address *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <button className='button'>Log in</button>
            <Link to="/register">Register</Link>

          </form>
        </div>
      </section>
    </>
  )
}

export  default Login