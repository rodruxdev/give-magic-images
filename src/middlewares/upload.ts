import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderPath = "./tmp/images";
    if (req?.user !== undefined) {
      folderPath += req.user ?? "";
    }
    cb(null, "./tmp/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
