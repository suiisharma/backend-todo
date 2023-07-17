import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


export const isAuthenicated=async(req,res,next)=>{
try {
    const {Token}=req.cookies;

    if(!Token){
     res.status(404).json({
            success:false,
            message:"Login first"
        })
    }
    const decodedData=jwt.verify(Token,process.env.jwt_secret);
    req.user=await User.findById(decodedData._id);
    next();
    
} catch (error) {
    console.log(error.message);
}
}