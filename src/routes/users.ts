import { Router } from "express";
import { UsersController } from "../controllers/user";
import passport from "passport";

export const usersRouter = Router();

usersRouter.post("/", UsersController.create);
usersRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UsersController.getUserInfo
);
