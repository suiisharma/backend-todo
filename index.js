import express from 'express'
import { config } from 'dotenv';
import DbConnection from './Database/DbConnect.js';
import USERrouter from './Routes/UserRoute.js';
import Taskrouter from './Routes/TaskRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


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
    
        //using cors
    
        app.use(cors(
            {
                origin:[process.env.frontend_url],
                methods:["GET","POST","PUT","DELETE"],
                credentials:true,
            }
        ))
        




    
    
    
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
