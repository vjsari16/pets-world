import React, { useState } from 'react';
import './login.css';
import Homescreen from './Homescreen';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.username === 'Vijay' && formData.password === 'password') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const containerStyle = {};

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'white',
    marginBottom: '50px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className='divStyle'>
      <div style={containerStyle}>
        {loggedIn ? (
          <div>
            <h2>Welcome, {formData.username}!</h2>
            <a href="/products" className="btn" onClick={Homescreen}>Shop Now</a>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div style={labelStyle}>Username</div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <div style={labelStyle}>Password</div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;