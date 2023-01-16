const { postRfidData, getRfidData } = require("../controller/rfid");
const express = require("express");
const router = express.Router();




router.post("/", postRfidData);
router.get("/", getRfidData);




module.exports = router