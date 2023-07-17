import express from "express";
import { GetUserDetails, Login, Logout, Register } from "../Controllers/UserController.js";
import { isAuthenicated } from "../middlewares/Authentication.js";


const USERrouter=express.Router();



USERrouter.post('/CreateUser',Register);
USERrouter.post('/Login',Login);
USERrouter.get('/logout',isAuthenicated,Logout);
USERrouter.get('/MyProfile',isAuthenicated,GetUserDetails);



export default USERrouter;