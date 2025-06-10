const Cryptojs=require('crypto-js');
const jwttoken=require('jsonwebtoken');
const User=require('../model/Usermodel')

const loginHandler=async(req,res)=>{
            try{
                const user=await User.findOne({number:req.body.number});
                !user && res.status(401).json({message:"Invalid mobile number"});

                const decodedpassword=Cryptojs.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(Cryptojs.enc.Utf8);
                decodedpassword!==req.body.password && res.status(401).json({message:"incorrect password"});
                const { password, ...rest }=user._doc;
                
                const accesstoken=jwttoken.sign({username:user.username},process.env.ACCESS_TOKEN);

                res.json({...rest,accesstoken})


            }catch(err){
                console.log(err);
            }
        }
module.exports=loginHandler;