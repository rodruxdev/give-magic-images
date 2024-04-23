import express, { Router } from "express";
import passport from "passport";
import { upload } from "../middlewares/upload";
import { ImagesController } from "../controllers/image";

export const imagesRouter = Router();

imagesRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  ImagesController.getAllByUserId
);
imagesRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  ImagesController.create
);

imagesRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  ImagesController.getById
);

imagesRouter.use("/file", express.static("tmp/images"));
// TODO delete image
