import boom from "@hapi/boom";
import { Request, Response } from "express";
import { UserInfo, validateUserForm } from "../schemas/users";
import { UsersModel } from "../models/user";

export class UsersController {
  static async create(req: Request, res: Response) {
    const result = validateUserForm(req.body);
    if (result.error) {
      throw boom.badRequest(result.error.message);
    }
    const newUser = await UsersModel.create({ input: result.data });
    res.status(201).json(newUser);
  }

  static getUserInfo(req: Request, res: Response) {
    const user = req.user as UserInfo;
    res.status(200).json(user);
  }
}
