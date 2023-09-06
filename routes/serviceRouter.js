const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.route("/").get(serviceController.getAllServiceCategory);
router.route("/:categoryId").get(serviceController.getSingleServiceCategory);

module.exports = router;
