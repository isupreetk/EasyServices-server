const express = require("express");
const router = express.Router();
const bookingLogController = require("../controllers/bookingLogController");

router.route("/InProgress").get(bookingLogController.getInProgressTasks);
router.route("/Completed").get(bookingLogController.getCompletedTasks);

module.exports = router;
