import { Router } from "express";
import { bookRouter } from "./book.routes";

export const indexRouter = Router();

indexRouter.use("/books", bookRouter);
