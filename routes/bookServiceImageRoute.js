const express = require("express");
const router = express.Router();
const bookServiceImageController = require("../controllers/bookServiceImageController");
const multer = require("multer");
const upload = multer({ dest: "images/" });

router
  .route("/")
  .post(upload.single("file"), bookServiceImageController.createServiceImage);

module.exports = router;
