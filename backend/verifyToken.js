const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    const {token}=req.cookies;
    // console.log(token)
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token,process.env.SECRET,(err, user) => {
    if (err) {
      return res.status(401).json("You are not authenticated!")
         }
    req.user = user;
    next();
    });
};

module.exports=verifyToken

