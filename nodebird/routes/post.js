const express = require("express");
const router = express.Router();
const { isLoggeIn, isNotLoggednIn } = require("../middlewares");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { afterUploadImage, uploadPost } = require("../controllers/post");

try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.post("/img", isLoggeIn, upload.single("img"), afterUploadImage);

const upload2 = multer();
router.post("/", isLoggeIn, upload2.none(), uploadPost);

module.exports = router;
