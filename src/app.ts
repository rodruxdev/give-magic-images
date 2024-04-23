import express, { json } from "express";
import passport from "passport";
import { corsMiddleware } from "./middlewares/cors";
import { usersRouter } from "./routes/users";
import { localStrategy } from "./utils/auth/localStrategy";
import { JwtStrategy } from "./utils/auth/jwtStrategy";
import { authRouter } from "./routes/auth";
import { imagesRouter } from "./routes/images";
import {
  boomHandler,
  errorHandler,
  logErrors,
} from "./middlewares/errorHandler";

const app = express();
const port = process.env.PORT || 3001;

passport.use(localStrategy);
passport.use(JwtStrategy);

app.use(json());
app.use(corsMiddleware());

app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  return console.log(
    `Express server is listening at http://localhost:${port} 🚀`
  );
});
