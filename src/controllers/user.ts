import boom from "@hapi/boom";
import { validateUserForm } from "../schemas/users.js";
import { UsersModel } from "../models/user.js";
import { Request, Response } from "express";

export class UsersController {
  static async create(req: Request, res: Response) {
    const result = validateUserForm(req.body);
    if (result.error) {
      throw boom.badRequest(result.error.message);
    }
    const newUser = UsersModel.create({ input: result.data });
    res.status(201).json(newUser);
  }
}
