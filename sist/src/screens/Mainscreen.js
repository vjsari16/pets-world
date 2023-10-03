import React from 'react';
import './Mainscreen.css';
import Homescreen from './Homescreen';

function Mainscreen() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Our Online Pet Store</h1>
        <p>Your furry friends deserve the best!</p>
        <a href="/products" className="btn" onClick={Homescreen}>Shop Now</a>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Product cards */}
        <div className="product-card">
          <img src="https://t3.ftcdn.net/jpg/02/75/81/76/240_F_275817643_j7I4lOboyxx5FXkvcbNU3S3ugTU4wvAV.jpg" alt="Dog Food" />
          <h3>Dog Food</h3>
          <p>High-quality dog food for a healthy pup.</p>
          <span className="price">$19.99</span><br></br>
        </div>
        <div className="product-card2">
          <img src="https://media.istockphoto.com/id/1218927738/photo/small-light-brown-granule-with-a-high-nutritional-value.jpg?s=612x612&w=0&k=20&c=rUNg1KVL3THJVAj5-hw59qTvrzUXeNkgYp5SIgAsDy0=" alt="Fish Food" />
          <h3>Fish Food</h3>
          <p>High-quality fish food for a healthy fishes.</p>
          <span className="price">$9.99</span><br></br>
        </div>
        <div className="product-card3">
          <img src="https://media.istockphoto.com/id/157327338/photo/great-and-blue-tit-feeding.jpg?s=612x612&w=0&k=20&c=kdIiE45T0Xj7TPAqY47W61N5mTowtAYZtcAn8Z7y6Lg=" alt="Birds Food" />
          <h3>Birds Food</h3>
          <p>High-quality Birds food for a healthy Birds.</p>
          <span className="price">$29.99</span><br></br>
        </div>

      </section>

      <footer className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <div className="contact-info">
          <p>Email: info@petstore.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Pet Street, Cityville</p>
        </div>
      </footer>
    </div>
  );
}

export default Mainscreen;