import User from "../models/userModel.js"
import bcrypt from 'bcrypt';
import { SendToken } from "../utils/TokenKeeper.js";



// registration
export const Register=async(req,res,next)=>{
try {
    const {name,email,password}=req.body;
    let user=await User.findOne({email});
    if(user){
        res.status(403).json({
            success:false,
            message:"User already exist"
        });
    }
    const Hashedpass=await bcrypt.hash(password,10);
     user=await User.create({name,email,password:Hashedpass});
     SendToken(user,res,"Registration successfull",201);
} catch (error) {
    console.log(error.message);
}
}

//login
export const Login=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        let user=await User.findOne({email}).select("+password");
        if(!user){
           return res.status(404).json({
                success:false,
                message:"User dont exist"
            });
        }
     const IsMatch=await bcrypt.compare(password,user.password);
     if(!IsMatch){
       return  res.status(404).json({
            success:false,
            message:"Invalid email/password"
        });
     }
     SendToken(user,res,"Login successfull",200);
    } catch (error) {
        console.log(error.message);
    }
}


//logout

export const Logout=(req,res,next)=>{
 try {
    res.status(200).cookie("Token","",{
     expires:new Date(Date.now()),
     sameSite:process.env.node_env==="development" ? "lax":"none",
    secure:process.env.node_env==="development" ? false:true
    }
    ).json({
       success:true,
       message:"Logout successfull",
       user:req.user
    })
 } catch (error) {
    console.log(error.message);
 }
}

//Get user details

export const GetUserDetails=async(req,res,next)=>{
 try {
     res.status(200).json({
       success:true,
       user:req.user
     })
 } catch (error) {
    console.log(error.message);
 }
}