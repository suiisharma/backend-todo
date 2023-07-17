import express from 'express'
import { config } from 'dotenv';
import DbConnection from './Database/DbConnect.js';
import USERrouter from './Routes/UserRoute.js';
import Taskrouter from './Routes/TaskRoute.js';
import cookieParser from 'cookie-parser';



//using config 
config(
    {
        path:'./Data/config.env',
    }
    )
    
// starting express server
const app=express();
//Connecting to database
DbConnection();




    
    
    
//using midllewares
    app.use(express.json());
    app.use(cookieParser());




// route splitting 

app.use('/user',USERrouter);
app.use('/task',Taskrouter);




// listening to actions at port 
app.listen(process.env.port,()=>{
console.log(`Server listening at port ${process.env.port}`);
})
