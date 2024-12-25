import mongoose from "mongoose";

export function ConnectToDB()
{
    mongoose.connect("mongodb://127.0.0.1:27017/notes").then((db)=>{
        console.log("connected");
    })
    .catch((err)=>{
        console.log(err)
    });
}