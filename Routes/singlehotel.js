const express=require('express');
const router=express.Router();
const singlehotelhandler = require('../Controllers/singlehotelcontroller');

router.route("/:id")
.get(singlehotelhandler)

module.exports=router;