const express = require("express");
const router = express.Router();
const bookServiceController = require("../controllers/bookServiceController");

router
  .route("/")
  .get(bookServiceController.getBookedService)
  .post(bookServiceController.createServiceBooking);

module.exports = router;
