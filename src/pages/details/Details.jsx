import React, { useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { blog } from '../../asset/Data'

 export const Details = () => {
    const {id} =useParams()
    const[blogs,setBlogs]=useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
          setBlogs(blogs)
        }
      }, [])
    
      return (
        <>
          {blogs ? (
            <section className='singlePost'>
              <div className='container'>
                <div className='left'>
                  <img src={blogs.cover} alt='' />
                </div>
                <div className='right'>
                  <div className='buttons'>
                    <button className='button'>
                      <BsPencilSquare />
                    </button>
                    <button className='button'>
                      <AiOutlineDelete />
                    </button>
                  </div>
                  <h1>{blogs.title}</h1>
                  <p>{blogs.desc}</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quam voluptatibus a dolorum quo minima voluptates labore nemo, quia unde ratione placeat obcaecati aut neque explicabo ullam, reiciendis voluptatem asperiores.</p><br></br>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p> <br/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae, culpa, error quos dignissimos natus iusto possimus libero explicabo vel deserunt exercitationem, ab itaque cumque animi. Harum similique inventore atque!</p>

                </div>
              </div>
            </section>
          ) : null}
        </>
      )
    }

export default Details

