const express = require('express')
const router = express.Router();
const AddData_controller = require("../controllers/AddDataControls")
 
router.post("/", AddData_controller.add); 
module.exports = router;