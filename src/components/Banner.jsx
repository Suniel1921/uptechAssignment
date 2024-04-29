import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
    <div className='bannerContainer'>
        <div className='time_Email'>
            <p>Mon-Fri: 9AM to 5PM</p>
            <p>YourBusiness@gmail.com</p>        
        </div>
        <div className='social_icons'>
            <FaFacebookSquare/>
            <FaSquareInstagram/>
            <FaSquareWhatsapp/>

        </div>


    </div>
      
    </>
  )
}

export default Banner
