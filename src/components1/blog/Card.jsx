import React from "react"
import "./blog.css"
import {AiOutlineShareAlt, AiOutlineTags}  from "react-icons/ai"
import { blog } from "../../asset/Data"
import { Link } from "react-router-dom"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineComment } from "react-icons/ai"




export const Card=()=>{
return(
<>
<section className="blog">
    <div className="container grid3">
        {blog.map((item)=>(
            <div className="box boxItems" key={item.id}>
                <div className="img">
                    <img src={item.cover} alt=""/>

                    </div>
              <div className="details">
                <div className="tag">
                    <AiOutlineTags className='icon'/>
                </div>
                <a href='/'>#{item.category}</a>
                </div>

                <Link to={`/details/${item.id}`} className='link'>
                <h3>{item.title}</h3>
               
                </Link>
                <p>{item.desc.slice(0,180)}...</p>
                <div className="date">
                    <AiOutlineClockCircle className="icon"/> <label htmlFor="">{item.date}</label>
                    <AiOutlineComment className="icon"/> <label htmlFor="">27</label>
                    <AiOutlineShareAlt className="icon"/><label htmlFor="">Share</label>
                </div>

            
                </div>
        ))}
    </div>
</section>


</>
)
}