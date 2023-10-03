import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Welcome to PETS-WORLD</h1>
          <p className="header-description">
            "Your One-Stop Destination for Quality Pets and pet products"
          </p>
          <h1 className='header-title2'>MOTIVE</h1>
          <p className='section-motive'>
          The aim of an online pet store, like any e-commerce platform specializing in pet-related products,<br></br> 
          is multifaceted and encompasses various goals and objectives.<br></br>
           This can save time and effort for customers</p>
        </div>
        </header>
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-info">
          <strong>Location:</strong> College Campus, Building XYZ
        </p>
        <p className="contact-info">
          <strong>Email:</strong> sistcanteen@example.com
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +123-456-7890
        </p>
      </section>
    </div>
  );
};

export default Home;