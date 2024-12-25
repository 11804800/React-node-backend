import User from "../model/user.model";
import { validationResult } from "express-validator";

export async function CreateUser(req: any, res: any) {
    try {
        const { fullname, email, dob } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors });
        }
        else {
            const user = await User.create({
                fullname: fullname,
                email: email,
                date_of_birth: dob
            });

            res.status(201).json({ user: user });
        }
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

//for login 
export async function LoginUser(req: any, res: any) {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });
        if(!user)
        {
            res.status(404).json({message:`user not found with email ${email}`});
        }
        else
        {
            res.status(200).json({message:"Login Successfull"});
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