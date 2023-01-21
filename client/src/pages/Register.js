

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {
     const navigate=useNavigate()
   const [name,setname]=useState('')
   const [email,setEmail]=useState('')
   const [password,setpassword]=useState('')
   const [domain,setdomain]=useState('')

     async function registeruser(e)
    {
       e.preventDefault()

      const response = await fetch('http://localhost:1337/api/user/register',{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({
          name,email,password,domain
         })
       }) 
         
       const data=await response.json()
       if(data.status==='ok'){
           navigate('/login');
       }



    }

  return (
         <>
        <h1 style={{textAlign:'center'}}>Register user</h1>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <form onSubmit={registeruser}>
       <label>UserName:</label>
       <br />
      <input type="text" value={name} placeholder="shivam..." onChange={(e)=>{setname(e.target.value)}}/>
      <br/>
      <label>Email:</label>
       <br />
       <input type="email" value={email} placeholder="abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} />
       <br/>
       <label>Password:</label>
       <br />
       <input type="password" value={password} placeholder="secretpswd" onChange={(e)=>{setpassword(e.target.value)}}/>
       <br />
       <label>Domain:</label>
       <br/>
       <input type="text" value={domain} placeholder="mern..." onChange={(e)=>{setdomain(e.target.value)}}/>
       <br />
       <input className='btn btn-primary' style={{marginTop:5}}type="submit" value="Register" />
     </form> 
     </div>
     </>
  );
}

export default Register;
