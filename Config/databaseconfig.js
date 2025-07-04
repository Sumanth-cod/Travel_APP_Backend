const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database conneccted Successfully");
}catch(err){
    console.log(err)
}
}


module.exports=connectDB;