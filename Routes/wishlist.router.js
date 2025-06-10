const express=require('express');

const router=express.Router();

const wishlistcontroller=require('../Controllers/wishlistcontroller');
const {createWishlisthandler,deletewishlisthandler,getwishlisthandler}=wishlistcontroller;


const verifyuser=require('../middleware/authmiddleware');
router.route("/")
    .post(verifyuser,createWishlisthandler)


    router.route("/:id")
      .delete(verifyuser,deletewishlisthandler)

     router.route("/")
     .get(getwishlisthandler) 
    module.exports=router;