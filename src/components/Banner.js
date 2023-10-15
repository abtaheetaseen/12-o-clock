import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="sm-banner">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>Buy 1 Get 1</h2>
            <span>Lorem ipsum dolor sit amet.</span>
            <NavLink to="/store">
                <button className="banner-btn">
                    Shop Now
                </button>
            </NavLink>
        </div>

        <div className="banner-box banner-box2">
            <h4>winter deals</h4>
            <h2>20% OFF</h2>
            <span>Lorem ipsum dolor sit amet.</span>
            <NavLink to="/store">
                <button className="banner-btn">
                    Shop Now
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Banner
