const express = require("express");
const router = express.Router();
const serviceProviderFeedController = require("../controllers/serviceProviderFeedController");

router.route("/").get(serviceProviderFeedController.getAllRequests);

module.exports = router;
