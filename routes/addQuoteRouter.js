const express = require("express");
const router = express.Router();
const addQuoteController = require("../controllers/addQuoteController");

router.route("/").post(addQuoteController.createQuote);
router.route("/:id").get(addQuoteController.getSingleTask);

module.exports = router;
