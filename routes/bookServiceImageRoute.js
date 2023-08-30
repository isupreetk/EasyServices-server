const express = require("express");
const router = express.Router();
const bookServiceImageController = require("../controllers/bookServiceImageController");

router
  .route("/")
  //   .get((req, res) => {
  //     res.send("Get on request files");
  //   })
  .post(bookServiceImageController.createServiceImage);

module.exports = router;
