import React from "react";
import "./../pages/home.css";
import Navbar from "../Navbar";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_section">
          <div className="">
            <Navbar />
          </div>
          <div className="container">
            <div className="home_content">
              <div className="home_left">
                <p className="home_para">Building with confidence</p>
                <h2 className="home_heading">
                  Building <span className="childText">And</span> <br />
                  Maintaing <span className="childText">Your Drams</span>
                </h2>
              </div>
              <div className="home_right">
                <img src="/image/PLUMBING.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yrsExperience">
        <h2 className="heading">20+ Years of Experience</h2>
      </div>



      {/* --------components----------- */}

      <div className="about_component"><About/></div>
      <div className="services_component"><Services/></div>
      <div className="projects_component"><Projects/></div>
     




    </>
  );
};

export default Home;
