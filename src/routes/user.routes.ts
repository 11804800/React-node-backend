import express from 'express';
import { body } from 'express-validator';
import bodyParser from 'body-parser';

const UserRouter=express.Router();

UserRouter.get("/",(req,res)=>{
    res.send("Home");
});

export default UserRouter;