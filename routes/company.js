const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const passportJWT = require('../middleware/passportJWT')
const checkadmin =require('../middleware/checkAdmin')

router.get("/", [passportJWT.islogin, checkadmin.isAdmin], companyController.company);

router.post("/", companyController.insert);
router.delete("/:id", companyController.destro);
router.put("/:id", companyController.update);

module.exports = router;