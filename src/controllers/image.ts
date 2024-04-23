import boom from "@hapi/boom";
import { Request, Response } from "express";
import { ImagesModel } from "../models/image";
import { User, UserInfo } from "../schemas/users";
import { UUID } from "crypto";

export class ImagesController {
  static getAllByUserId(req: Request, res: Response) {
    try {
      const user = req.user as UserInfo;
      if (user === undefined) {
        throw boom.badImplementation();
      }

      const images = ImagesModel.getAllByUserId({ userId: user.userId });
      res.status(200).json(images);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }

  static getById(req: Request, res: Response) {
    try {
      const user = req.user as UserInfo;
      if (user === undefined) {
        throw boom.badImplementation();
      }

      const imageId = req.params.id as UUID;
      const image = ImagesModel.getById({ imageId, userId: user.userId });
      res.status(200).json(image);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }

  static create(req: Request, res: Response) {
    try {
      const user = req.user as UserInfo;
      if (user === undefined) {
        throw boom.badImplementation();
      }

      if (req.file === undefined) {
        throw boom.badRequest("File not uploaded.");
      }
      const imageURL = req.file.path;

      const image = ImagesModel.create({ userId: user.userId, imageURL });
      res.status(201).json(image);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }
}
