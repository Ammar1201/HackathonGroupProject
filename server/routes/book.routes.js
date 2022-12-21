import { Router } from "express";
import {getAllBooks,getBookById} from "../controllers/books.controllers.js";
export const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);