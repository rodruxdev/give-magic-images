import boom from "@hapi/boom";
import { Request, Response } from "express";
import { ImagesModel } from "../models/image";
import { User } from "../schemas/users";
import { UUID } from "crypto";

export class ImagesController {
  static getAllByUserId(req: Request, res: Response) {
    try {
      const data = req;
      const userToken = data.user as { sub: string } | undefined;
      if (userToken === undefined) {
        throw boom.badImplementation();
      }

      const { sub: userId } = userToken;
      const images = ImagesModel.getAllByUserId({ userId: userId as UUID });
      res.status(200).json(images);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }

  static getById(req: Request, res: Response) {
    try {
      const data = req;
      const userToken = data.user as { sub: string } | undefined;
      if (userToken === undefined) {
        throw boom.badImplementation();
      }
      const imageId = data.params.id as UUID;
      const { sub: userId } = userToken;

      const image = ImagesModel.getById({ imageId, userId: userId as UUID });
      res.status(200).json(image);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }

  static create(req: Request, res: Response) {
    try {
      const userToken = req.user as { sub: string } | undefined;
      if (userToken === undefined) {
        throw boom.badImplementation();
      }

      if (req.file === undefined) {
        throw boom.badRequest("File not uploaded.");
      }
      const imageURL = req.file.path;
      const { sub: userId } = userToken;

      const image = ImagesModel.create({ userId: userId as UUID, imageURL });
      res.status(201).json(image);
    } catch (err) {
      throw boom.badImplementation(err as Error);
    }
  }
}
