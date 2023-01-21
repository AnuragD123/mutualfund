const express=require('express');
const app=express()

const User=require('./models/usermodel')
// const jwt=require('jsonwebtoken')
// const bcrypt=require('bcryptjs')
//connect db 
const mongoose=require('mongoose')
const connectDB=require('./db')
// const mailerfun=require('./mail')
connectDB();
  //mailerfun('shivammalviya502@gmail.com','hiiii','byyyy');

// security measure k liye h dusre server se request aayengi to browser check karenga 
//important for connecting front-end to back-end
//set correct header so that it can communicate cross-origin
const cors=require('cors') 
app.use(cors()) 
 
// body m jo bhi aaye use json m parse karta h 
// without it body will show undefined 
app.use(express.json())




app.get('/',(req,res)=>{
    res.send("Hello namaste dev")
})


app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))
// app.use('/api/users/' , require('./routes/usersRoute'))
// app.use('/api/bookings/' , require('./routes/bookingsRoute'))






// // ye frontend se information le raha h form ki 
// app.post('/api/register',async(req,res)=>{
//    try {
//     const newpassword=await bcrypt.hash(req.body.password,10)
//     const user=await User.create({
//         name:req.body.name,
//         email:req.body.email,
//         password:newpassword,
//         domain:req.body.domain,

//     });
//     res.json({status:'ok'})
//    } catch (error) {
//        res.json({status:'error h bhai'})
//    }
     
// }) 

// //login api 
// app.post('/api/login',async(req,res)=>{

   
//     const user= await User.findOne({
//     email:req.body.email,
    
//    }) 
//     if(!user){
//         return res.json({status:'error',error:'Invalid user'})
//     }
//    const ispasswordvalid=await bcrypt.compare(req.body.password,user.password)

//    if(ispasswordvalid){
//     const token=jwt.sign({
//         name:user.name,
//         email:user.email,
//         isadmin:user.isadmin,
//         isapproved:user.isapproved,
//     },'secret12346676r545654')
//     return res.json({status:'ok',user:token})
//    }
//    else{
//     return res.json({status:'error',user:false})
//    } 
// })

// //user dashboard api 
// app.get('/api/profile',async(req,res)=>{
//     const token=req.headers['x-access-token']
//     try{
//       const decoded=jwt.verify(token,'secret12346676r545654')
//        const email=decoded.email
//        const user=await User.findOne({email:email})
//        return res.json({status:'ok',data:user})
//     }
//     catch(error){
//      console.log(error);
//      res.json({status:'error',error:'invalid token'})
//     }
  
// })

// app.get('/api/admingetdata',async(req,res)=>{
//     console.log('aa rahi h')
//     const token=req.headers['x-access-token']
//     try{
//       const decoded=jwt.verify(token,'secret12346676r545654')
//        const admin=decoded.isadmin
//        if(admin){
//        const user=await User.find();
       
//        return res.json({status:'ok',data:user})
//        }
//        else{
//         console.log('problm')
//        }
//       // return res.json({status:'ok',data:user})
//     }
//     catch(error){
//      console.log(error);
//      res.json({status:'error',error:'invalid token'})
//     }
  
// })


// app.post('/api/adminupdatedata',async(req,res)=>{
//     try {
//         const id=req.body.id;
//         const doc = await User.findOneAndUpdate(
//             { _id: id },
//             { isapproved: true},
//             // If `new` isn't true, `findOneAndUpdate()` will return the
//             // document as it was before it was updated.
//             { new: true }
//            );
           
//            return res.json({status:'ok'})
//     } catch (error) {
//         console.log(error);
//        return res.json({status:'error',error:'invalid token'})
//     }
// })

// app.post('/api/edituser',async(req,res)=>{
//       try {
//         const{_id,name,email,domain}=req.body;
//         const password=await bcrypt.hash(req.body.password,10)
//         const doc = await User.findOneAndUpdate(
//             { _id: _id },
//             { _id,name,email,domain,password},
//             // If `new` isn't true, `findOneAndUpdate()` will return the
//             // document as it was before it was updated.
//             { new: true }
//            );
           
//            return res.json({status:'ok'})
//       } catch (error) {
//         console.log(error);
//        return res.json({status:'error',error:'invalid token'})
//       }
// })





// //forgot password 
// app.post('/api/user/forgot',async(req,res)=>{

   
//     const user= await User.findOne({
//     email:req.body.email,
    
//    }) 
//     if(!user){
//         return res.json({status:'error',error:'Invalid email'})
//     }
    
//     if(user)
//     {   const mailid=`${req.body.email}`;
//       function generateOTP() {
          
       
//         var digits = '0123456789';
//         let OTP = '';
//         for (let i = 0; i < 4; i++ ) {
//             OTP += digits[Math.floor(Math.random() * 10)];
//         }
//         return OTP;
//      } 
//        const OTP=generateOTP();
//        const text=`Your OTP is ${OTP}`;
//         mailerfun(mailid,'OTP',text);

//         return res.json({status:'ok',message:'mail sent enter otp'})
//     }
// })













//server ko listen karna padta h port no pr 
app.listen(1337,()=>{
    console.log("server is running")
})