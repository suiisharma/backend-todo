import Task from "../models/TaskModel.js";



// creating a task
export const CreateTask=async(req,res,next)=>{
  try {
    const {title,description}=req.body;
    const task=await Task.create({title,description,UserId:req.user._id});
    res.status(201).json({
      success:true,
      message:"Task created sucessfully"
    })
  } catch (error) {
    console.log(error.message);
  }
}

// fetching all tasks


export const FetchAllTasks=async(req,res,next)=>{
  try {
     const tasks=await Task.find({UserId:req.user._id});
     res.status(200).json({
      success:true,
      tasks
     })
  }
 catch (error) {
    console.log(error.message);
  }
}


//update task


export const UpdateTask=async(req,res,next)=>{
try {
        const id=req.params.id;
        const task=await Task.findById(id);
        if(!task){
            return res.status(400).json({
                success:false,
                message:"Enter a valid task"
            })
        }
        task.isCompleted=!task.isCompleted;
        await task.save();
        res.status(200).json({
            success:true,
            message:"Task updated successfully"
        })
} catch (error) {
    console.log(error.message);
}
}

// delete task

export const DeleteTask=async(req,res,next)=>{
  try {
      const id =req.params.id;
      const task=await Task.findById(id);
      if(!task){
          return res.status(400).json({
              success:false,
              message:"Enter a valid task"
          })
      }
      await task.remove();
      res.status(200).json({
          success:true,
          message:"Task deleted successfully"
      })
  } catch (error) {
    console.log(error.message);
  }
}