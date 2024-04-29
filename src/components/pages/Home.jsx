import React from "react";
import "./../pages/home.css";
import Navbar from "../Navbar";

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
    </>
  );
};

export default Home;
