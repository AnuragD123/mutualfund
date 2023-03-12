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


router.get('/stocks/test', async (req, res) => {

 
    const fields = { name: 1,sector_id: 1, P_E_Ratio: 1, ROCE_Percentage: 1 };
    
    Stocks.find({}, fields,(err, stocks)=> {
        if (err) {
          console.log(err);
          return;
        }
    
        const rankingsMap = new Map();
    
        // Calculate combined ROC and P/E ratio rankings for each stock and store them in a Map
        stocks.forEach(function(stock) {
          const ranking = getRanking(stocks, 'ROCE_Percentage', 'P_E_Ratio', stock);
          const sector = stock.sector_id;
          if (!rankingsMap.has(sector)) {
            rankingsMap.set(sector, []);
          }
          rankingsMap.get(sector).push({ stock_name: stock.name, ranking: ranking });
        });
    
        // Sort stocks in each sector by combined ROC and P/E ratio ranking and output the results
        rankingsMap.forEach(function(stocks, sector) {
          console.log(`\n${sector} - Combined ROC and P/E ratio ranking:`);
          stocks.sort(function(a, b) {
            return a.ranking - b.ranking;
          });
          stocks.forEach(function(stock, index) {
            console.log(`${index+1}. ${stock.stock_name} (Combined ROC and P/E ratio ranking: ${stock.ranking})`);
          });
        });
    
        
      });
    
    function getRanking(stocks, rocField, peField, currentStock) {
      const rocValues = stocks.map(stock => stock[rocField]);
      const peValues = stocks.map(stock => stock[peField]);
      const rocMax = Math.max(...rocValues);
      const peMax = Math.max(...peValues);
      const rocRanking = 1 - currentStock[rocField] / rocMax;
      const peRanking = 1 - currentStock[peField] / peMax;
      const combinedRanking = rocRanking + peRanking;
      return combinedRanking;
    }
    
})





module.exports=router;