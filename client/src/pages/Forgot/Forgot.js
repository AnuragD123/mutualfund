import React, { useState } from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {

  const Navigate = useNavigate();
  const [email, setemail] = useState('')
  const [data, setdata] = useState(true)
  const [otpnumber, setotpnumber] = useState('');



  async function handleotp(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/api/user/otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, otpnumber
      })
    })

    const dat = await response.json()
    let status = dat.status;
    let message = dat.message;
    if (status === "success") {
      Navigate('/changepassword');
    }
    else{
      alert(message)
    }


  }

  async function handlesubmit(e) {

    e.preventDefault()

    const response = await fetch('http://localhost:1337/api/user/forgotpswd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email
      })
    })

    const dat = await response.json()
    let msg = dat.message;
    alert(msg);
    let status = dat.status;
    if (status === "success") {

      setdata(false);
    }

  }
  return (
    <div className='container w-50 my-5'>
      <h2 className='text-center'>Forgot Password</h2>

      {
        data ?

          <form className='form-container mt-5' onSubmit={handlesubmit}>

            <div className="form-outline mb-4">
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} name="password" />
              <label className="form-label" htmlFor="email">Email</label>
            </div>

            <div className="form-outline mb-4 text-dark">
              <input type='submit' value="Get OTP" className="xyz btn btn-danger btn-block mb-4" />
            </div>
          </form>

          :

          <form onSubmit={handleotp}>

            <div className="form-outline mb-4">
              <input type="text" id="otp" className="form-control" value={otpnumber} onChange={(e) => { setotpnumber(e.target.value) }} name="otp" />
              <label className="form-label" htmlFor="otp">Enter OTP</label>
            </div>

            <div className="form-outline mb-4">
              <input type='submit' value="Verify OTP" className="btn btn-danger btn-block mb-4" />
            </div>
          </form>}

    </div>
  )
}

export default Forgot;

