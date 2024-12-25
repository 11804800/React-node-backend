import express, { RequestHandler, Response } from "express";
let app=express();
import indexRouter from "./routes/index";

app.use("/index",indexRouter);

app.listen("3000",()=>{
    console.log("running");
});