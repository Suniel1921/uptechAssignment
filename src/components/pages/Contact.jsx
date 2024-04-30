import React from "react";
import "./../pages/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_section">
          <div className="container">
            <div className="contact_content">
              <p>Have Some Work for Us?</p>
              <h2 className="heading">Request A Quote Today</h2>
              <p>
                Please contact us with all your needs. We look forward to
                serving you.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form_Section">
        <div className="contact_left">
          <form className="form">
          <h4>Request a Free Quote</h4>
            <input type="text" name="name" id="" placeholder="Full Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input
              type="number"
              name="number"
              id=""
              placeholder="Contact Number"
            />
            <input
              type="text"
              name="serviceTitle"
              id=""
              placeholder="Service Title"
            />
            <input
              type="text"
              name="serviceDescription"
              id=""
              placeholder="Service Description"
            />
            <button className="contact_btn">Send Request</button>
          </form>
        </div>
        <div className="contact_right container">
          <p className="para">Visit Our Office</p>
          <h2>Our Main Office</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            repellat distinctio obcaecati alias asperiores! Repudiandae.
          </p>
          <hr />
          <p>Address : Lorem Ipsum</p>
          <p>Phone : +977 0000000000</p>
          <p>Business House : Mon-Fri: 9am - 5Pm</p>
          <p>Email address : Yourbusiness@business.com</p>
          <h2>Area Covered</h2>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
