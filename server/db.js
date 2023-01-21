require('dotenv').config()

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.Url)
       console.log(`mongodb connection is successfull`)
    }catch(error){
        console.log(`${error}`)
    }
};
module.exports=connectDb;


