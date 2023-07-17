import express from "express";
import { isAuthenicated } from "../middlewares/Authentication.js";
import { CreateTask, DeleteTask, FetchAllTasks, UpdateTask } from "../Controllers/TaskController.js";


const Taskrouter=express.Router();



Taskrouter.post('/CreateTask',isAuthenicated,CreateTask)
Taskrouter.get('/AllTasks',isAuthenicated,FetchAllTasks)
Taskrouter.route('/:id').put(isAuthenicated,UpdateTask).delete(isAuthenicated,DeleteTask);




export default Taskrouter;