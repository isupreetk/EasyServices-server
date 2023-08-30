const express = require("express");
const router = express.Router();
const bookServiceImageController = require("../controllers/bookServiceImageController1");
const multer = require("multer");
const upload = multer({ dest: "images/" });

router
  .route("/")
  //   .get((req, res) => {
  //     res.send("Get on request files");
  //   })
  .post(upload.single("file"), bookServiceImageController.createServiceImage);

module.exports = router;
