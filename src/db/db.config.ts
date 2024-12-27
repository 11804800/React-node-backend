import mongoose from "mongoose";

export function ConnectToDB()
{
    mongoose.connect("mongodb+srv://nikhilpathak2602:7GeI97REnITGGRX4@cluster0.7lurh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((db)=>{
        console.log("connected");
    })
    .catch((err)=>{
        console.log(err)
    });
}