import React from "react";
import "./about.css";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about_section">
          <div className="container">
            <div className="about_content">
              <div className="about_left">
                <div className="about_card">
                  <img src="/image/watertreatment.jpg" alt="watertreatment image"/>
                 
                </div>
              </div>
              <div className="about_right">
              <p className="para">About Our Company</p>
              <hr className="horizontal_line"/>
                <h2 className="heading">Your Business <br /> Name LLC</h2>
                <p className="about_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ad! Alias repellat, suscipit, est saepe nostrum autem soluta corporis rem mollitia quaerat distinctio deleniti nemo magnam sunt exercitationem, tempora voluptas?</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ad! Alias repellat, suscipit, est saepe nostrum autem soluta corporis rem mollitia quaerat distinctio deleniti nemo magnam sunt exercitationem, tempora voluptas?</p>
                <button className="readMoreBtn">Read More <FaArrowRight/> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
