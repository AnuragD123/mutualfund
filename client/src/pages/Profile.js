import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile=()=>{
    const navigate=useNavigate();
      const [info,setinfo]=useState({})
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
          setinfo({...data.data})
         
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

        console.log(info);
    return(
        // <div>
        // 
           
        //  <h2>your domain is {info.domain}</h2>
        //  <h3>your registerd email id is{info.email}</h3>
         
        // </div>
        <Card>
        <Card.Header><h1>Hello {info.name}</h1></Card.Header>
        <Card.Body>
          <Card.Title><h3> {info.name} , you are {info.isapproved?'Enrolled ':'Not Enrolled'}  in praedico </h3></Card.Title>
          <Card.Text>
          <h3>Your domain is :    {info.domain}</h3>
          <h3>Your registerd email id is :  {info.email}</h3>
          <h3>Your Stack is:   {info.domain}</h3>
          </Card.Text>
          {info.isapproved &&<Button onClick={()=>{navigate('/edit')}} variant="primary">Edit</Button>}
        </Card.Body>
      </Card>
    )
}

export default Profile ;

