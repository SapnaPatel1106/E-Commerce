const{string}= require('joi')
const jwt= require('jsonwebtoken')

const user= require('../models/userModelSchema')


const checkUserAuth =async (req,res,next)=>{
    let token;
    const {authorization}= req.headers;
    if(authorization && authorization.startsWith("Bearer")){
       try{
            token = authorization.split(" ")[1]
            const {userId} = jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.user = await user.findById(userId).select('-password');
            next()
       }catch(err){
        res.status(400).json({
            success:false,
            message:"Authentication failed, unauthorized user"+ err.message
        })
       } 
    }
    if (!token) {
        res.status(401).send({ "message": "unauthorized user" });
    }
}

const isUser = async (req,res,next)=>{
    if(req.body.userRole==="user"){
        next();
    }else{
        return res.status(401).send("Unauthorized user");
    }
}

const isVender = async (req,res,next)=>{
    if(req.body.venderRole==="vender"){
        next();
    }else{
        return res.status(401).send("Unauthorized vender");
    }
}


module.exports = {
    checkUserAuth,
    isUser,
    isVender,
}
