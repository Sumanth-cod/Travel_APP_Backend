const express=require('express');
const router=express.Router();
const signuphandler=require('../Controllers/signupcontroller');
const loginHandler=require('../Controllers/logincontroller');

router.route("/register")
    .post(signuphandler)
        
router.route("/login")
        .post(loginHandler)

module.exports=router;