import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../assets/images/12146011_Wavy_Gen-01_Single-07.jpg'
import './validate.css'



function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://nice-lime-giraffe-coat.cyclic.app/api/loginuser", {
      mode: 'cors',

      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem('authToken', json.authToken)
      navigate("/");

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
      <div className='card-img'>
      <img src={login} alt="" />
      </div>
        <div className="card">
          <div className="card_title">
            <h1>Login</h1>
            <span>Does'nt have an account? <Link to='/signup'>Sign Up</Link></span>
          </div>
          <div className="form" onSubmit={handleSubmit}>
            <form action="/login" method="post">
              <input type="email" name="email" placeholder="Email" id="email" onChange={onChange} />
              <input type="password" name="password" placeholder="Password" id="password" onChange={onChange} />
              <button>Login</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
