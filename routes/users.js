var express = require("express");
var router = express.Router();

const userController =require('../controllers/userController')

const { body } = require('express-validator');

/* GET users listing. */
router.get("/",userController.index);

router.get("/bio",userController.bio );

router.post("/",[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมลด้วย").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรองรหัสผ่านด้วย").isLength({min:5}).withMessage("รหัสผ่านต้องมีมากกว่า 5 ตัวอักษรขึ้นไป")
    
],userController.register)

router.post("/",[
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมลด้วย").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรองรหัสผ่านด้วย").isLength({min:5}).withMessage("รหัสผ่านต้องมีมากกว่า 5 ตัวอักษรขึ้นไป")
],
userController.login)

module.exports = router;
