import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-body">
        <div className="about-container">
        <h1>12 - O - CLOCK</h1>
        <h2>"The joy of dressing is an art"</h2>
        <div className="image">
            <img src="./img/heroBg4.jpg" alt="" className='about-img'/>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quam quasi, tenetur soluta iste deleniti facere, nisi laudantium veniam fugiat, voluptate pariatur incidunt recusandae. Praesentium adipisci aut doloribus iusto maxime?</p>
        <NavLink to='/'>
            <button className='about-btn'>Get In Touch</button>
        </NavLink>
    </div>
    </section>
  )
}

export default About
