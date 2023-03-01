const mongoose=require('mongoose')

const sectors=new mongoose.Schema(
    {
        sector_id:{type:String,required:true,unique:true},
      
        Sector_name:{type:String,required:true},
 
    },{timestamps:true},
    {collection:'sectors'}
)

const model=mongoose.model('Sectors',sectors,'Sectors') 
module.exports=model
