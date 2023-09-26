import React from 'react'
import logo from '../assets/logo.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='Logo'/>
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
          </div>
        </div>
        <div className="footerLinks">
        <span className="linkTitle">Quick Guide</span>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Flight Status</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>

      </div>
      <div className="footerLinks">
        <span className="linkTitle">Information</span>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Glight Status</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>

      </div>
      </div>

      <div className="copyRightDiv flex">
        <p>Travel Design | Developed by <a href="https://emailto-salonikri225@gmail.com" target='_blank'>Saloni</a></p>
      </div>
      
    </div>
  )
}

export default Footer