import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiImageAddLine } from 'react-icons/ri';
import {IoSettingsOutline} from "react-icons/io5"
import {BsBagCheck} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {GrHelp} from "react-icons/gr"
import {BiLogOut} from "react-icons/bi"



const User = () => {
   
    const user =true
   
    const[profileOpen,setProfileOpen]=useState(false)
  
    const close=()=>{
        setProfileOpen(false)
    }
  return (
    <>
    <div className='profile'>
        {user ?  (
            <>
            <button className='img' onClick={()=>setProfileOpen(!profileOpen)}>
            <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600 ' alt='images'   width='80px'></img>
        </button>
      
   
   
   {profileOpen && ( <div className='openProfile boxItems' onClick={close}>
        <Link to="/account">
            <div className='image'>
                <div className='img'>
                <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600 ' alt='images'   width='80px'></img>
                </div>

             <div className='text'>
                <h4>Eden Smith</h4>
                <p>Los Angles,CA</p>
                </div>   
            </div>
            </Link>
            <Link to="/Create">
                <button className='box'  >
                    <RiImageAddLine className='icon'/>
                    <h6>Create post</h6>
                </button>
            </Link>
            
                <button className='box'>
                    <IoSettingsOutline className='icon'/>
                    <h6>My Account</h6>
                </button>

                <button className='box'>
                    <BsBagCheck className='icon'/>
                    <h6>My order</h6>
                </button>

                <button className='box'>
                    <AiOutlineHeart className='icon'/>
                    <h6>Wishlist</h6>
                </button>
             
                <button className='box'>
                    <GrHelp className='icon'/>
                    <h6>Help</h6>
                </button>

                
                <button className='box'>
                    <BiLogOut className='icon'/>
                    <h6>Log Out</h6>
                </button>
            
    </div>)}
</>
  ):(
    <Link to ="/login">
    <button>MyAccount</button>
    </Link>
  )}
    </div>
     </>
    
  )
}

export default User