import boom from "@hapi/boom";
import { Request, Response } from "express";
import { ImagesModel } from "../models/image";
import { User, UserInfo } from "../schemas/users";
import { UUID } from "crypto";

export class ImagesController {
  static getAllByUserId(req: Request, res: Response) {
    const user = req.user as UserInfo;
    if (user === undefined) {
      throw boom.badImplementation("User info not found.");
    }

    const images = ImagesModel.getAllByUserId({ userId: user.userId });
    res.status(200).json(images);
  }

  static getById(req: Request, res: Response) {
    const user = req.user as UserInfo;
    if (user === undefined) {
      throw boom.badImplementation("User info not found.");
    }

    const imageId = req.params.id as UUID;
    const image = ImagesModel.getById({ imageId, userId: user.userId });
    res.status(200).json(image);
  }

  static create(req: Request, res: Response) {
    const user = req.user as UserInfo;
    if (user === undefined) {
      throw boom.badImplementation("User info not found.");
    }

    if (req.file === undefined) {
      throw boom.badRequest("File not uploaded.");
    }

    const image = ImagesModel.create({ userId: user.userId, file: req.file });
    res.status(201).json(image);
  }
}
