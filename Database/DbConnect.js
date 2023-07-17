import mongoose from "mongoose";


const DbConnection=async()=>{
  try {
    await  mongoose.connect(process.env.mongouri,{dbName:"ApiBackend"});
   console.log(`Database connected successfully at mongouri ( ${process.env.mongouri})`);
  } catch (error) {
    console.log(error.message);
  }
};

export default DbConnection;