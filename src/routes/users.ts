import { Router } from "express";
import { UsersController } from "../controllers/user";

export const usersRouter = Router();

// To Do, encrypt password with passport
usersRouter.post("/", UsersController.create);
