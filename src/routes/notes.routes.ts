import express from 'express';
import { body } from 'express-validator';
import bodyParser from 'body-parser';
import { CreateNotes, DeleteAllNotes,DeleteNotesById , GetNotes, UpdateNotes } from '../controller/notes.controller';

const NoteRouter=express.Router();
NoteRouter.use(bodyParser.json());

NoteRouter.get("/:author",GetNotes);

NoteRouter.post("/",[
    body("title").isLength({min:3}).withMessage("title Must be of 3 characters long")
],CreateNotes);

NoteRouter.put("/:id",[
    body("title").isLength({min:3}).withMessage("title Must be of 3 characters long")
],UpdateNotes);

NoteRouter.delete("/all/:author",DeleteAllNotes);
NoteRouter.delete("/:id",DeleteNotesById);



export default NoteRouter;