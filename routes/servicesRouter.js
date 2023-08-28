const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");

router.route("/").get(servicesController.index);

router.route("/:id").get(servicesController.getSingleService);

module.exports = router;
