const express = require('express')
const router = express.Router();
const GetData_controller = require("../controllers/GetDataControls")
 
router.get("/", GetData_controller.get); 
module.exports = router;