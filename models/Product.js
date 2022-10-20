const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ProductSchema=new Schema({
productName:{
    type:String,
    required:[true, 'product name is required field']
},
price:{
    type:Number,
    required:[true, 'price price  is required field']

},
createdOn:{
type:Date,
default:Date.now

}


});
module.exports=mongoose.model('ProductModel',ProductSchema,"products");