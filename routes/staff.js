const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

const { body } = require('express-validator');
const passportJWT = require("../middleware/passportJWT")

router.get("/", [passportJWT.islogin],staffController.staff);


router.get("/:id", staffController.show);

router.delete("/:id", staffController.destro);

router.put("/:id", staffController.update);


router.post("/",[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('salary').not().isEmpty().withMessage("กรุณาใส่ข้อมูลด้วย").isNumeric().withMessage("กรุณาใส่เป็นตัวเลข")
], staffController.insert);

module.exports = router;