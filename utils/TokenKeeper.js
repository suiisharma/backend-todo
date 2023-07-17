import jwt from 'jsonwebtoken';


export const SendToken=async(user,res,message,statusCode=200)=>{
const token =jwt.sign({_id:user._id},process.env.jwt_secret);
res.status(statusCode).cookie("Token",token,{
    httpOnly:true,
    maxage:15*60*1000,
    sameSite:process.env.node_env==="development" ? "lax":"none",
      secure:process.env.node_env==="development" ? false:true
}).json({
    success:"true",
     message
})
}