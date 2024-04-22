import jwt from "jsonwebtoken";
import { configValues } from "../config";
import { Request, Response } from "express";
import type { UserInfo } from "../schemas/users";
import boom from "@hapi/boom";

export class AuthController {
  static login(req: Request, res: Response) {
    const data = req;
    const user = data.user as UserInfo | undefined;
    if (user === undefined) {
      throw boom.badImplementation();
    }
    const payload = {
      sub: user?.userId,
    };
    if (configValues?.secret !== undefined) {
      const token = jwt.sign(payload, configValues.secret);
      res.json({ user, token });
    } else {
      throw boom.badImplementation("Error reading env variable.");
    }
  }
}
