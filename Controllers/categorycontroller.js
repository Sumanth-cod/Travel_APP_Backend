const Category=require("../model/categorymodel");

const categoryController=async (req,res)=>{
        try{
            const categories=await Category.find({});
            res.json(categories)
        }
        catch{
            res.status(404).json({message:"Coud not found categoties"})
        }

    }
module.exports=categoryController;