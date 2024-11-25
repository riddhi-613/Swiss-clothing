// src/pages/About.js
import React from "react";
import "./About.css"; // Import the CSS for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    
  return (
   <>
    <Navbar/>
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our story, our values, and our commitment to quality.</p>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h2>Our Story</h2>
          <p>
            Welcome to our online store! We are a team of fashion enthusiasts 
            dedicated to bringing you the best collections of trendy and timeless 
            clothing. Since our launch, we have been committed to providing high-quality 
            products at affordable prices, making sure that everyone has access to great fashion.
          </p>
        </div>

        <div className="about-image">
          
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make quality fashion accessible to all. 
            We strive to create an inclusive shopping experience where everyone 
            feels confident and comfortable in what they wear. Our goal is to help 
            you express yourself through your unique style.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <p>Thank you for visiting our store. We're excited to be part of your fashion journey!</p>
      </div>
    </div>
    <Footer/></>
  );
};

export default About;
