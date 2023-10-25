import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000000, //2MB
  },
  fileFilter: function (req, file, callback) {
    let extension = path.extname(file.originalname);
    if ((extension !== ".jpg" && extension !== ".png" && extension !== ".jpeg" && extension !== ".webp")) {
      callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
});

export { uploadPicture };
