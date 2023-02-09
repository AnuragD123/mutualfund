import React, { useState } from 'react'


function Changepassword() {


    const [btnState,setBtnState] =useState({color:"danger", text:"Change Password"})
    const [btnDisable,setBtnDisable]=useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')


    const handleChangePassword= async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:1337/api/user/changepassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password
          })
        })
    
        const dat = await response.json()
        let status = dat.status;
        if (status==="success") {
            setBtnState({color:"success", text:"Password Changed"})
            setBtnDisable(true)
        }
    
    
      }
    

    return (
        <div className='container w-50 my-5'>
            <h1>Change Password</h1>

            <form onSubmit={handleChangePassword}>

                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} name="password" />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} name="password" />
                    <label className="form-label" htmlFor="password">*New Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="cpassword" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} name="password" />
                    <label className="form-label" htmlFor="cpassword">*Confirm Password</label>
                </div>

                <div className="form-outline mb-4 text-dark">
                    <input type='submit' value={btnState.text} className={`xyz btn btn-${btnState.color} btn-block mb-4`} disabled={btnDisable} />
                </div>
            </form>




        </div>
    )
}

export default Changepassword
