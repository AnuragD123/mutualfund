

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";
//import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'bootstrap';

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')


  async function loginuser(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:1337/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = await response.json()
    console.log(data);

    if (data.user) {

      const user = decodeToken(data.user)


      localStorage.setItem("token", data.user)
      if (user.isadmin) {
        alert("Successfull login as admin boss")
        navigate('/admin')

      }

      else {
        alert("Successfull login as normal user")
        navigate('/profile')
      }
    }
    else {
      alert("invalid username and password")
    }





  }

  return (
    <div className='container mt-5 pt-5'>

      <h1 style={{ textAlign: 'center' }}>Login user</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <form onSubmit={loginuser}>
          <label htmlFor="Email:"> Email:</label>
          <br />
          <input type="email" value={email} placeholder="abc@gmail.com" onChange={(e) => { setEmail(e.target.value) }} />
          <br />
          <label htmlFor="Password:">Password:</label>
          <br />
          <input type="password" value={password} placeholder="secretpswd" onChange={(e) => { setpassword(e.target.value) }} />
          <br />

          <input className='btn btn-primary' style={{ marginTop: 5 }} type="submit" value="Login" />
        </form>
      </div>
    </div>


  );
}

export default Login;
