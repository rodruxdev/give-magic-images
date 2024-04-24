import { randomUUID } from "crypto";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp/images");
  },
  filename: function (req, file, cb) {
    const imageId = randomUUID();
    cb(null, `${imageId}-${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
