import { Router } from "express";
import passport from "passport";
import { AuthController } from "../controllers/auth";

export const authRouter = Router();

authRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
