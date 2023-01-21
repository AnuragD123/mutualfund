import React, { useState } from 'react'

const Forgot = () => {
    const[email,setemail]=useState('')
    const [data,setdata]=useState(true)
      const [otpnumber,setotpnumber]=useState('');

      async function handleotp(e)
      {
          e.preventDefault(); 
          const response = await fetch('http://localhost:1337/api/user/forgotpswd/validate',{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({
          email,otpnumber
         })
       }) 
         
       const dat=await response.json()
       let d=dat.message;
       alert(d);
       
          
      }
      
    async function handlesubmit(e){

        e.preventDefault()

      const response = await fetch('http://localhost:1337/api/user/forgotpswd',{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({
          email
         })
       }) 
         
       const dat=await response.json()
       let d=dat.message;
       alert(d);
       setdata(false);

    }
  return (
    <>
    {data?<form onSubmit={handlesubmit}>             
       <input type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} name="email"  />
        <input type='submit'/>
    </form>:<form onSubmit={handleotp}>             
       <input type="number"  value={otpnumber} onChange={(e)=>{setotpnumber(e.target.value)}}  />
        <input type='submit'/>
    </form>}
   
    </>
  )
}

export default Forgot; 

