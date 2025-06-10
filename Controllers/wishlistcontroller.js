
const {create}=require("../model/hotel.model")
const Wishlist=require("../model/wishlist.model");

const createWishlisthandler=async(req,res)=>{

        const newwishlist=new Wishlist(req.body);
        try{
            const savedwishlist=await newwishlist.save();
            res.status(201).json(savedwishlist);
        }
        catch(err){
            res.status(500).json({message:"failed to create a wishlist"})
        }

    }

const deletewishlisthandler=async(req,res)=>{
        try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message:"Hotel deleted Successfully"})
        }
        catch(err){
            res.status(500).json({message:"could not delete hotel from wishlist"});

        }
      }

const getwishlisthandler=async(req,res)=>{
        try{
            const wishlist=await Wishlist.find({});
            wishlist? res.json(wishlist):res.json({message:"No items in the wishlist"})

        }catch(err){
            res.status(500).json(err)
        }
     }
module.exports={createWishlisthandler,deletewishlisthandler,getwishlisthandler};