const express = require("express");
const router = express.Router();
const User = require("../models/usermodel")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const Stocks = require("../models/stocks.js")
const Sectors = require("../models/sectors.js")


const fs = require('fs')




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

/* API TO INSERT STOCKS DATA */



router.get('/stocks/insertdata', (req, res) => {

    fs.readFile('./data/PeerComparison/BankCompanies.json', "utf-8", (err, data) => {
        // console.log(data);
        let dataobj = JSON.parse(data)
        let stocks = dataobj.stocks;
       

        try {
            // let stid = stock+1;
            Stocks.insertMany(stocks)
            .then(()=>{console.log("success"); res.send('success')}).catch((err)=>{
                console.log(err)
                res.send(err)
            });
            // res.json({ status: 'ok' })
        } catch (error) {
            // res.json({ status: 'error' })

        }
        
        // return res.send(data)
    })


})


/* to fetch all the sectors */

router.get('/stocks/fetchsectors', async (req, res) => {

    try {

        const sectorsdata= await Sectors.find()
        res.json({status:"success", sectorsdata})

        
    } 
    catch(error) {
        res.json({ status: 'error',error })
    }

})

/* to fetch stocks data */

router.get('/stocks/fetch', async (req, res) => {

    let {id} = req.query;
    console.log("id= ",id);

    try {

    //    const stocks=await Stocks.find().countDocuments()
    //                                         .then((count)=>{
    //                                             console.log(count)
    //                                         })
       const stocks=await Stocks.find({sector_id:id});
        
        res.json({ status: 'success', data:stocks })
    } catch (error) {
        res.json({ status: 'error' })
    }

})




module.exports=router;