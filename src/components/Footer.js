import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">
                            Website
                        </h1>
                        <span className="footer__subtitle">
                            F A S H I O N - F L E E
                        </span>
                    </div>

                    <ul className="footer__links">
                        <li>
                        <NavLink className='footer__link' to="/">Home</NavLink>
                        </li>

                        <li>
                        <NavLink className='footer__link' to="/about">About</NavLink>
                        </li>

                        <li>
                        <NavLink className='footer__link' to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://facebook.com" target="_blank" className="footer__social">
                        <BsFacebook />
                        </a>

                        <a href="https://whatsapp.com" target="_blank" className="footer__social">
                            <AiOutlineWhatsApp />
                        </a>

                        <a href="https://instagram.com" target="_blank" className="footer__social">
                        <AiFillInstagram />
                        </a>
                    </div>
                </div>

                <p className="footer__copy">Abtahee Ashab Siddiqui, All right reserved</p>
            </div>
        </footer>
  )
}

export default Footer
