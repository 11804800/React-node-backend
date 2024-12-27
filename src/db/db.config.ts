import mongoose from "mongoose";

export function ConnectToDB()
{
    const Connection_String:any=process.env.DB_NAME;
    mongoose.connect(Connection_String).then((db)=>{
        console.log("connected");
    })
    .catch((err)=>{
        console.log(err)
    });
}