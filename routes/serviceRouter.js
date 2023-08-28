const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.route("/").get(serviceController.getAllServiceCategory);
router.route("/:categoryId").get(serviceController.getSingleServiceCategory);
// .put(servicesController.updateSingleService);
// router.route("/:categoryId/:serviceId").get(serviceController.getSingleService);

module.exports = router;
