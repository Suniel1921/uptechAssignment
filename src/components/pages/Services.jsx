import React from 'react'
import './services.css'
import Card from '../Card'

const Services = () => {
  return (
    <>
    <div className='services_container'>
      <div className='services_section'>
        <div className="container">
          <div className="services_content">
            <p>what we offering</p>
            <h2>Our Services</h2>
            <p>No Job is too Big or to Small for Crew at Your Business Name LLC</p>

            <div className='card_container'>
            <div className="card"><Card title="Plumbing" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptate voluptates odio iure voluptatem deleniti vitae animi labore facere nostrum."/></div>
            <div className="card"><Card title="Water Treatment" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptate voluptates odio iure voluptatem deleniti vitae animi labore facere nostrum."/></div>
            <div className="card big_Card"><Card  title="Commercial Property Maintenance" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptate voluptates odio iure voluptatem deleniti vitae animi labore facere nostrum."/></div>
            <div className="card big_Card"><Card title="Preventative Maintenance" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptate voluptates odio iure voluptatem deleniti vitae animi labore facere nostrum."/></div>
            </div>

             
          </div>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default Services
