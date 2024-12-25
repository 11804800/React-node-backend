import express, { RequestHandler, Response } from "express";
let app=express();
import indexRouter from "./routes/index";
import NoteRouter from "./routes/notes.routes";
import UserRouter from "./routes/user.routes";
import { ConnectToDB } from "./db/db.config.js";

ConnectToDB();

app.use("/index",indexRouter);
app.use("/users",UserRouter);
app.use("/notes",NoteRouter);

app.listen("3000",()=>{
    console.log("running");
});