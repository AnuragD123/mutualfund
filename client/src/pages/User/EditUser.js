
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";
function EditUser() {
     const navigate=useNavigate()

   const initialstate={
    _id:'',
    name:'',
    email:'',
    password:'',
    domain:'',
   }


   const [info,setinfo]=useState(initialstate)
   async function populate(){
      const req=await fetch('http://localhost:1337/api/user/profile',{
          headers:{
             'x-access-token':localStorage.getItem('token')
          }
      })
      const data= await req.json()
     // console.log(data.data)
      if(data.status==='ok'){
       //console.log(data)
       setinfo({_id:data.data._id,name:data.data.name,email:data.data.email,password:data.data.password,domain:data.data.domain})
      
      }
      else{ 
       //console.log(data.error);
       console.log('data nhi aya');
       alert('you are not approved')
      }
       
   }

 useEffect(()=>{
     const token=localStorage.getItem('token');
     const user=decodeToken(token)
      if(!user){
         localStorage.removeItem('token')
           navigate('/login')
      }
      else{
        //console.log(user.isadmin)
         populate();
      }

     },[])


     async function edituser(e)
    {
       e.preventDefault()

      const response = await fetch('http://localhost:1337/api/user/edituser',{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({
          _id:info._id,name:info.name,email:info.email,password:info.password,domain:info.domain
         })
       }) 
         
       const data=await response.json()
       if(data.status==='ok'){
           navigate('/profile');
       }



    }

  return (
         <>
        <h1 style={{textAlign:'center'}}>Edit User's Details</h1>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <form onSubmit={edituser}>
       <label>UserName:</label>
       <br />
      <input type="text" value={info.name} placeholder="shivam..." onChange={(e)=>{setinfo({...info,name:e.target.value})}}/>
      <br/>
      <label>Email:</label>
       <br />
       <input type="email" value={info.email} placeholder="abc@gmail.com" onChange={(e)=>{setinfo({...info,email:e.target.value})}} />
       <br/>
       <label>Password:</label>
       <br />
       <input type="password" value={info.password} placeholder="secretpswd" onChange={(e)=>{setinfo({...info,password:e.target.value})}}/>
       <br />
       <label>Domain:</label>
       <br/>
       <input type="text" value={info.domain} placeholder="mern..." onChange={(e)=>{setinfo({...info,domain:e.target.value})}}/>
       <br />
       <input className='btn btn-primary' style={{marginTop:5}}type="submit" value="submit" />
     </form>
     </div>
     </>
  );
}

export default EditUser;