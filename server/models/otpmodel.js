const mongoose=require('mongoose')

const Otp=new mongoose.Schema(
    {
      
        email:{type:String,required:true,unique:true},
        otp:{type:String,required:true},
        exipiresOn:{type:Number,required:true},
        
 
    },{timestamps:true},
    {collection:'user-data'}
)

const model=mongoose.model('Otp',Otp,'Otp') 
module.exports=model
