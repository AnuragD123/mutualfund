const mongoose=require('mongoose')

const Feedback=new mongoose.Schema(
    {
      
        email:{type:String,required:true,unique:true},
        name:{type:String,required:true},
        rating:{type:Number,required:true},
        message:{type:String,required:true},
        approved:{type:String,required:true,default:false},
        
 
    },{timestamps:true},
    {collection:'Feedback'}
)

const model=mongoose.model('Feedback',Feedback,'Feedback') 
module.exports=model
