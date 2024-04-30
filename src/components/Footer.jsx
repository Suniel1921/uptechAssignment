import React from 'react'
import { Link } from 'react-router-dom'
import './../components/footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer_container'>
      <div className="container">
        <div className="footer_section">
          <div className='logo'>logo</div>
          <div className='quickLink'>
            <h3>Quick Link</h3>
            <ul className='footer_links'>
              <li><Link>About us</Link></li>
              <li><Link>Portfolio</Link></li>
              <li><Link>Testimonials</Link></li>
              <li><Link>Services</Link></li>
              <li><Link>Contact</Link></li>
            </ul>
          </div>
          <div className='get_in_touch'>
            <h3>Get in Touch</h3>
            <ul className='footer_links'>
              <li><Link>facebook</Link></li>
              <li><Link>instagram</Link></li>
              <li><Link>twitter</Link></li>
              <li><Link>linked</Link></li>
              <li><Link>youtube</Link></li>
            </ul>
          </div>
          <div className='basic_info'>
            <h3>Basic Info</h3>
            <ul className='footer_links'>
              <li><Link>facebook</Link></li>
              <li><Link>instagram</Link></li>
              <li><Link>twitter</Link></li>
              <li><Link>linked</Link></li>
              <li><Link>youtube</Link></li>
            </ul>
          </div>
        </div>
        
        
      </div>

      
    </div>
      
    </>
  )
}

export default Footer
