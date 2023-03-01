const mongoose=require('mongoose')
var Schema = mongoose.Schema;
// const autoIncrement = require('mongoose-auto-increment');

// const connection = mongoose.connection;

// autoIncrement.initialize(connection);

const stocks=new mongoose.Schema(
    {
   
        name: {type:String,required:true},
        url: {type:String} ,
        CMP_Rs: {type:String},
        P_E_Ratio: {type:String},
        Mar_Cap_Rs_Cr: {type:String} ,
        Div_Yld_Percentage: {type:String} ,
        NP_Qtr_Rs_Cr: {type:String},
        Qtr_Profit_Var_Percentage:{type:String} ,
        Sales_Qtr_Rs_Cr: {type:String},
        Qtr_Sales_Var_Percentage:{type:String} ,
        ROCE_Percentage:{type:String} ,
        sector_id:{type: Schema.Types.ObjectId, ref: 'Sectors',default:"63fc86b81b4e4372764308d1"}
        
 
    },{timestamps:true},
    {collection:'Stocks'}
)


const model=mongoose.model('Stocks',stocks,'Stocks') 
module.exports=model
