import mongoose from "mongoose";

const UserScema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
    select:false,
},
CreatedAt:{
    type:Date,
    default:Date.now,
}
})

const User=mongoose.model('User',UserScema);


export default User;