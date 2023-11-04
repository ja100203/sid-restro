import React, { useState } from 'react'
import './validate.css'
import { Link, useNavigate } from 'react-router-dom'
import register from '../assets/images/5423351_Mobile-login.jpg'

function Signup() {

  const [credentials, setCredentials] = useState({ username: "", email: "", password: "" })
const navigate=useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://nice-lime-giraffe-coat.cyclic.app/api/createuser", {
      mode: 'no-cors',
      cache: 'no-cache',


      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      })
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem('token', json.authToken);
        navigate("/login");
      } else {
        alert("Registration failed. Please check your credentials.");
      }
    } else {
      console.log(`HTTP error: ${response.status}`);
      alert("Failed to register. Please try again later.");
    }
  } catch (error) {
    console.error("An error occurred while processing the request:", error);
    alert("An error occurred while processing your request.");
  }
};

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
    <div className='card-img'>
    <img src={register} alt='' />
    </div>
    <div className="card">
      <div className="card_title">
        <h1>Create Account</h1>
        <span>Already have an account? <Link to='/login'>Login</Link></span>
      </div>
      <div className="form">
      <form action="/register"  onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" placeholder="UserName" onChange={onChange} />
        <input type="email" name="email" placeholder="Email" id="email" onChange={onChange}  />
        <input type="password" name="password" placeholder="Password" id="password" onChange={onChange} />
        <button>Sign Up</button>
        </form>
      </div>
    
    </div>
  </div>

  )
}

export default Signup

