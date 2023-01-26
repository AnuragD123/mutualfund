const express = require("express");
const router = express.Router();
const User = require("../models/usermodel")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const mailerfun=require('../utilities/mail')

const fs = require('fs')



// ye frontend se information le raha h form ki 
router.post('/register',async(req,res)=>{
   try {
    const newpassword=await bcrypt.hash(req.body.password,10)
    const user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:newpassword,
        domain:req.body.domain,

    });
    res.json({status:'ok'})
   } catch (error) {
       res.json({status:'error h bhai'})
   }
     
}) 



//login api 
router.post('/login',async(req,res)=>{

   
    const user= await User.findOne({
    email:req.body.email,
    
   }) 
    if(!user){
        return res.json({status:'error',error:'Invalid user'})
    }
   const ispasswordvalid=await bcrypt.compare(req.body.password,user.password)

   if(ispasswordvalid){
    const token=jwt.sign({
        name:user.name,
        email:user.email,
        isadmin:user.isadmin,
        isapproved:user.isapproved,
    },'secret12346676r545654')
    return res.json({status:'ok',user:token})
   }
   else{
    return res.json({status:'error',user:false})
   } 
})



//user dashboard api 
router.get('/profile',async(req,res)=>{
    const token=req.headers['x-access-token']
    try{
      const decoded=jwt.verify(token,'secret12346676r545654')
       const email=decoded.email
       const user=await User.findOne({email:email})
       return res.json({status:'ok',data:user})
    }
    catch(error){
     console.log(error);
     res.json({status:'error',error:'invalid token'})
    }
  
})


router.post('/edituser',async(req,res)=>{
    try {
      const{_id,name,email,domain}=req.body;
      const password=await bcrypt.hash(req.body.password,10)
      const doc = await User.findOneAndUpdate(
          { _id: _id },
          { _id,name,email,domain,password},
          // If `new` isn't true, `findOneAndUpdate()` will return the
          // document as it was before it was updated.
          { new: true }
         );
         
         return res.json({status:'ok'})
    } catch (error) {
      console.log(error);
     return res.json({status:'error',error:'invalid token'})
    }
})



//forgot password 
router.post('/forgotpswd',async(req,res)=>{

   
    const user= await User.findOne({
    email:req.body.email,
    
   }) 
    if(!user){
        return res.json({status:'error',error:'Invalid email'})
    }
    
    if(user)
    {   const mailid=`${req.body.email}`;
      function generateOTP() {
          
       
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++ ) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
     } 
       const OTP=generateOTP();
       const text=`Your OTP is ${OTP}`;
        mailerfun(mailid,'OTP',text);

        return res.json({status:'ok',message:'mail sent enter otp'})
    }
})

router.get('/fetchdata',(req,res)=>{

    fs.readFile('./data/moneycontrol.json',"utf-8",(err,data)=>{
        return res.send(data)
    })
    

})


module.exports=router;