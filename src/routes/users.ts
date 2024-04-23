import { Router } from "express";
import { UsersController } from "../controllers/user";

export const usersRouter = Router();

usersRouter.post("/", UsersController.create);
