import User from "../model/user.model";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export async function CreateUser(req: any, res: any) {
    try {
        const { fullname, email, dob, otp } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors });
        }
        else {
            const user = await User.create({
                fullname: fullname,
                email: email,
                date_of_birth: dob,
                otp: otp
            });
            const secret:any=process.env.SECRET_KEY;
            const token = jwt.sign({ user: email }, secret);
            res.status(201).json({ user: user,token:token });
        }
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

//for login 
export async function LoginUser(req: any, res: any) {
    try {
        const { email, otp } = req.body;
        const user:any = await User.findOne({ email: email });
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors });
        }
        else if (!user) {
            res.status(404).json({ message: `user not found with email ${email}` });
        }
        else {
            if (user.otp == otp) {
                const secret:any=process.env.SECRET_KEY;
                const token = jwt.sign({ user: email }, secret);
                res.status(200).json({ message: "Login Successfull", token: token });
            }
            else
            {
                res.status(401).json({message:"Otp didn't Match"});
            }
        }
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }

}

//for getting user
export async function GetUser(req: any, res: any) {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email: email });
        res.status(200).json({ user: user });
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}


//for deleting the user
export async function DeleteUser(req: any, res: any) {
    try {
        const result = await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ result: result });
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}