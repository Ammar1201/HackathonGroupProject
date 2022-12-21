import { Router } from "express";
import { bookRouter } from "./book.routes.js";

export const indexRouter = Router();

indexRouter.use("/books", bookRouter);
