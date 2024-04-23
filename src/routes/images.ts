import { Router } from "express";
import passport from "passport";
import { upload } from "../middlewares/upload";

export const imagesRouter = Router();

imagesRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  () => {}
);
imagesRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  () => {}
);

imagesRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  () => {}
);
// TODO delete image
