const express = require("express");
const router = express.Router();
const User = require("../models/usermodel")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



//approving logic is here
router.post('/adminupdatedata',async(req,res)=>{
    try {
        const id=req.body.id;
        const doc = await User.findOneAndUpdate(
            { _id: id },
            { isapproved: true},
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


//getting data of all user to admin
router.get('/admingetdata',async(req,res)=>{
   
    const token=req.headers['x-access-token']
    try{
      const decoded=jwt.verify(token,'secret12346676r545654')
       const admin=decoded.isadmin
       if(admin){
       const user=await User.find();
       
       return res.json({status:'ok',data:user})
       }
       else{
        console.log('problm')
       }
      // return res.json({status:'ok',data:user})
    }
    catch(error){
     console.log(error);
     res.json({status:'error',error:'invalid token'})
    }
  
})






module.exports=router;