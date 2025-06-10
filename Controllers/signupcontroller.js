const Cryptojs=require('crypto-js');

const User=require('../model/Usermodel')


const signuphandler=async(req,res)=>{
            try{
                const userObject=new User({
                    username:req.body.username,
                    number:req.body.number,
                    email:req.body.email,
                
                    password:Cryptojs.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
                });
                // const newuserdata=new User(userObject);
                const savedUser=await userObject.save();

                res.status(201).json(savedUser);
            }catch(err){
                res.status(500).json({message:"Error creating a user"})
                console.log(err);

            }
}
module.exports=signuphandler;