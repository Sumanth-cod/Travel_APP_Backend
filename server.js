const  express = require("express");
const app=express();

const mongoose=require("mongoose");
const dotenv=require('dotenv');
dotenv.config();
const connectDB=require("./Config/databaseconfig")

const hotelrouter=require("./Routes/hotelrouter");
const categoryrouter=require("./Routes/categoryrouter");
const singlehotelrouter=require('./Routes/singlehotel')
const authrouter=require("./Routes/authrouter");
const hoteldatathatneedtobeaddedtodb=require('./Routes/dataimportroute');
const Categorydatathatneedtobeaddedtodb=require('./Routes/categoryimport');
const Wishlistrouter =require("./Routes/wishlist.router");

app.use(express.json())


connectDB();
app.get("/",(req,res)=>{
    // res.send("helo world");
    
})

app.use("/api/hotels",hotelrouter);//to get hotel data
app.use("/api/category",categoryrouter);//to get hotel data
app.use("/api/hoteldata",hoteldatathatneedtobeaddedtodb);
app.use("/api/categorydata",Categorydatathatneedtobeaddedtodb)
app.use('/api/hotels',singlehotelrouter)
app.use('/api/auth',authrouter);
app.use('/api/wishlist',Wishlistrouter)

const PORT = process.env.port || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});




