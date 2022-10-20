const mongoose =require('mongoose')
const dotenv=require('dotenv');
dotenv.config()
const connectToDB=async()=>{
    const mongoDBUrl=process.env.MONGODB_URL
    db=mongoose.connect(mongoDBUrl).then(()=>{
    console.log("Successfully connected to the database.")
    },(error)=>{
    console.log(`Something goes wrong whiel connecting to the mongodb:${error}`);
    });
}
module.exports=connectToDB;