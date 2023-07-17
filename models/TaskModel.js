import mongoose from "mongoose";

const TaskScema=mongoose.Schema({
title:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
isCompleted:{
    type:Boolean,
    default:false,
},
UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
},
CreatedAt:{
    type:Date,
    default:Date.now,
}
})

const Task=mongoose.model('Task',TaskScema);


export default Task;