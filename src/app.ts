import express from "express";
let app=express();
import indexRouter from "./routes/index";
import NoteRouter from "./routes/notes.routes";
import UserRouter from "./routes/user.routes";
import { ConnectToDB } from "./db/db.config.js";
import cors from 'cors';

ConnectToDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/index",indexRouter);
app.use("/users",UserRouter);
app.use("/notes",NoteRouter);

app.listen("3000",()=>{
    console.log("running");
});