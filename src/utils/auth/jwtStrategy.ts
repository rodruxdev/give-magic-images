import { Strategy, ExtractJwt } from "passport-jwt";
import { configValues } from "../../config";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: configValues.secret ?? "GoodKind2024-Test",
};

export const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
