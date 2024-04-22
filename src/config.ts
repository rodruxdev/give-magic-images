import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: ".env.local" });

export const configValues = {
  secret: process.env.JWT_SECRET,
};
