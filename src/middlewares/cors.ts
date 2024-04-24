import cors from "cors";

const ACCEPTED_ORIGINS = ["http://localhost:5173", "http://localhost:4173"];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (origin !== undefined) {
        if (!acceptedOrigins.includes(origin)) {
          return callback(new Error("Not allowed by CORS"));
        }
      }
      return callback(null, true);
    },
  });
