const User=require("./models/User");
const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    const token=req.cookies.access_token;
    // console.log(token)
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
    const decode = jwt.verify(token,process.env.SECRET)
    // console.log("decoded data ",decode)

    req.userId = await User.findById(decode._id)

   
    // console.log(req.user);
    next();
}

module.exports=verifyToken
