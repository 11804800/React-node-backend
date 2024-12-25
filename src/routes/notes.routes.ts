import express from 'express';
import { body } from 'express-validator';
import bodyParser from 'body-parser';

const NoteRouter=express.Router();

NoteRouter.get("/",(req,res)=>{
    res.send("Home");
});

NoteRouter.post("/",(req,res)=>{
    res.send("Home");
});

NoteRouter.put("/",(req,res)=>{
    res.send("Home");
});

NoteRouter.delete("/",(req,res)=>{
    res.send("Home");
});



export default NoteRouter;