const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get("/", staffController.staff);

router.post("/", staffController.insert);

module.exports = router;