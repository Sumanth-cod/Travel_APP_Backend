const Hotel=require("../model/hotel.model")


const singlehotelhandler=async(req,res)=>{
    try{
        const { id }=req.params;
        const hotel=await Hotel.findById(id);
        res.json(hotel) 
    }
    catch(err){
        res.json({meassage:"Not find the single hotel data"})
    }
}

module.exports=singlehotelhandler;