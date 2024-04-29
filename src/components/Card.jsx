import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './../components/card.css'

const Card = ({title,para}) => {
  return (
    <>
   
    <div className="child_card">
        <h4>{title}</h4>
        <p className='card_para'>{para}</p>
        <p>View all <FaArrowRight/> </p>
    </div>
      
    </>
  )
}

export default Card
