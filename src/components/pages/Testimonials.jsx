import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../pages/testimonials.css";
import { Link, useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
      user: "Test Test",
      image: "./image/man.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
      user: "Test Test",
      image: "./image/man.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
      user: "Test Test",
      image: "./image/man.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <div className="testimonials">
        <div className="left_testimonial">
          <p className="title">What our client say's</p>
          <h2 className="heading">Client's Testimonials</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eligendi!
          </p>
        </div>
        <div className="right_testimonial">
         

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
             <>
              <div key={index} className="testimonialsCard">
                <div className="testimonials_usersDetails">
                  {/* <img className="testimonial_User" src={testimonial.image} alt="client image"/> */}
                  <h2>{testimonial.user}</h2>
                  <img className="rating" src={testimonial.rating} alt="" />
                </div>
                <p>{testimonial.text}</p>
              </div>
                <img className="clentImg" src={testimonial.image} alt="" />
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
