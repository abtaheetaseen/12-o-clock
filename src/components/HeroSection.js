import React from "react";
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    
    <section className="header">
    
        <div className="text-box">
            <h1>F A S H I O N - F L E E</h1>
            <p>'What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?"</p>
            <NavLink to='/store'>
                  <button className='btn'>Explore More</button>
            </NavLink>
        </div>

    </section>
    
  )
}

export default HeroSection