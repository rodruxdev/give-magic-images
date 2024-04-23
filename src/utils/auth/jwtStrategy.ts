import { Strategy, ExtractJwt } from "passport-jwt";
import { configValues } from "../../config";
import { UsersModel } from "../../models/user";
import boom from "@hapi/boom";
import { UserInfo } from "../../schemas/users";
import { UUID } from "crypto";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: configValues.secret ?? "GoodKind2024-Test",
};

export const JwtStrategy = new Strategy(options, (payload, done) => {
  try {
    if (payload.sub === undefined) {
      done(boom.unauthorized(), false);
    }
    const user = UsersModel.getById({ userId: payload.sub });
    if (user === undefined) {
      done(boom.unauthorized(), false);
    }
    const resUser: UserInfo = {
      userId: user?.userId as UserInfo["userId"],
      email: user?.email as UserInfo["email"],
    };
    done(null, resUser);
  } catch (error) {
    done(error, false);
  }
});
