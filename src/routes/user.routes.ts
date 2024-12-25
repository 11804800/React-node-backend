import express from 'express';
import { body } from 'express-validator';
import bodyParser from 'body-parser';
import { CreateUser, DeleteUser, GetUser, LoginUser } from '../controller/user.controller';

const UserRouter=express.Router();
UserRouter.use(bodyParser.json());

//for Signup new user
UserRouter.post("/signup",[
    body("fullname").isLength({min:6}).withMessage("Fullname should be of 6 characters"),
    body("email").isEmail().withMessage("Enter a Valid Email")
],CreateUser);

//for login user
UserRouter.post("/login",[
    body("email").isEmail().withMessage("Enter a Valid Email")
],LoginUser);

//for getting User
UserRouter.get("/:email",GetUser);

//for deleting user account
UserRouter.delete("/:id",DeleteUser);

export default UserRouter;