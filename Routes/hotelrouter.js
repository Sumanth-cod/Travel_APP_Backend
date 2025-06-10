const express=require('express');
const router=express.Router();

const getallhotelhandler = require('../Controllers/hotelcontroller');

// router.route("/")
// .get((req,res)=>{
//     res.json(hotels.data)
// })

router.route("/")
    .get(getallhotelhandler)


module.exports=router;