import express, { RequestHandler, Response } from "express";
let app=express();
import indexRouter from "./routes/index";
import { ConnectToDB } from "./db/db.config.js";

ConnectToDB();

app.use("/index",indexRouter);

app.listen("3000",()=>{
    console.log("running");
});