const multer = require("multer");
const path = require("path");
const MAX_SIZE = 200000000;
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./statics");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: MAX_SIZE,
  },
});

const cekNull = (fileUpload) => {
  if (fileUpload === undefined || fileUpload === null) {
    return null;
  } else {
    return fileUpload[0].filename;
  }
};

const deleteImage = (fotoProduk) => {
  fs.unlinkSync(`./statics/${fotoProduk}`);
};

module.exports = { multer, deleteImage, cekNull, upload };
