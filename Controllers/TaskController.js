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
    res.status(400).json({
      success:false,
      message:"Internal server error"
  })
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
  res.status(404).json({
    success:false,
    message:"Failed to fetch information"
})
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
  res.status(400).json({
    success:false,
    message:"Internal server error"
})
}
}

// delete task

export const DeleteTask=async(req,res,next)=>{
  try {
      const id =req.params.id;
      const task =await Task.findByIdAndRemove(id);
      if(task){
       res.status(200).json({
            success:true,
            message:"Task deleted successfully"
        })
      }
      else{
          res.status(404).json({
            success:false,
            message:"Enter a valid task"
          })
          }
      }
 catch (error) {
    res.status(400).json({
      success:false,
      message:"Internal server error"
  })
  }
}