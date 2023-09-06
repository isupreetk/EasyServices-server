const express = require("express");
const router = express.Router();
const addQuoteController = require("../controllers/addQuoteController");

router
  .route("/:id")
  .get(addQuoteController.getSingleTask)
  .post(addQuoteController.createQuote);

module.exports = router;
