import { validationResult } from "express-validator";
import Notes from "../model/notes.model";

export async function GetNotes(req: any, res: any) {
    try {
        const result = await Notes.find({author:req.user.user});
        res.status(200).json({ result: result });
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

export async function CreateNotes(req: any, res: any) {
    try {
        const { title, description, author } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors });
        }
        else if(!author)
        {
            throw new Error("Author is required");
        }
        else {
            const result = await Notes.create({
                title: title,
                description: description,
                author: author
            });
            res.status(201).json(result);
        }
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

export async function UpdateNotes(req: any, res: any) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors });
        }
        else {
            const result = await Notes.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(result);
        }
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

export async function DeleteNotesById(req: any, res: any) {
    try {
        const result=await Notes.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}

export async function DeleteAllNotes(req: any, res: any) {
    try {
        //delete where the note's author matched with author name
        const result=await Notes.deleteMany({author:req.user.user});
        res.status(200).json(result);
    }
    catch (err: any) {
        res.status(500).json({ err: err.message });
    }
}