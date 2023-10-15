import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi';
import { useCartContext } from "../context/cartContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {total_item} = useCartContext();

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>

        <li>
                    <NavLink to='/cart' className='navbar-link cart-trolley--link'>
                        <FiShoppingCart className='cart-trolley'/>
                        <span className='cart-total--item'>{total_item}</span>
                    </NavLink>
                </li>
      </ul>
    </nav>
  );
};

export default Navbar