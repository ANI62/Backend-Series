import mongoose  from "mongoose";
import {DB_NAME} from "./constants"
import express from 'express';
const app=express();












/*
 ;(async function connectDB(){
       try{
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        app.on("error",()=>{
          console.log("Error hai bhai ..dekh le tu ab",error);
           throw error;
        })
        app.listen(process.env.PORT,()=>{
          console.log(`App is listening on port ${process.env.PORT}`)
        });

       }catch(error){
        console.log("Error",error)
        throw error;
       }

 })();//IIFE (immediately invocked function execution)
*/