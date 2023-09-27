import React from 'react'
import image from "../../asset/images/in.jpg"
import '../account/account.css'


const Account = () => {
  return (
    <>
    <section className='accountInfo'>
    <div className='container boxItems'>
        <h1>Account Information</h1>
        <div className='content fle'>
            <div className='left'>
                <div className='img flexCenter'>
                    <input type='file' src={image} alt='imgs'/>
                   <img src={image}   width='200px'height='100px'  alt='images'/>
                   </div>
                   </div>
                    <div className='right'>
                        <label htmlFor=''>Username</label>
                        <input type='text'/>
                        <label htmlFor=''>Email</label>
                        <input type='email'/>
                        <label htmlFor=''>Password</label>
                        <input type='password'/>
                        <button className='button'>Update</button>
                    
                </div>
            
        </div>
        </div>
        </section>
    
    </>
  )
}

export default Account