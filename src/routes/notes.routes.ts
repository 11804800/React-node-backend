import express from 'express';
import { body } from 'express-validator';
import bodyParser from 'body-parser';
import { CreateNotes, DeleteAllNotes,DeleteNotesById , GetNotes, UpdateNotes } from '../controller/notes.controller';
import { VerifyAuthor } from '../middleware/Authentication';

const NoteRouter=express.Router();
NoteRouter.use(bodyParser.json());

NoteRouter.get("/",VerifyAuthor,GetNotes);

NoteRouter.post("/",VerifyAuthor,[
    body("title").isLength({min:3}).withMessage("title Must be of 3 characters long")
],CreateNotes);

NoteRouter.put("/:id",VerifyAuthor,[
    body("title").isLength({min:3}).withMessage("title Must be of 3 characters long")
],UpdateNotes);

//it takes author as params to delete all the notes of author
NoteRouter.delete("/",VerifyAuthor,DeleteAllNotes);
NoteRouter.delete("/:id",VerifyAuthor,DeleteNotesById);



export default NoteRouter;