import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(corsMiddleware());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  return console.log(
    `Express server is listening at http://localhost:${port} 🚀`
  );
});
