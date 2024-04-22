import { Strategy } from "passport-local";
import { UsersModel } from "../../models/user";
import boom from "@hapi/boom";
import bcrypt from "bcryptjs";
import type { UserInfo } from "../../schemas/users";

export const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      const user = UsersModel.getByEmail({ email });
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = bcrypt.compare(password, user?.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      const resUser: UserInfo = { userId: user?.userId, email: user?.email };
      done(null, resUser);
    } catch (error) {
      done(error, false);
    }
  }
);
