const { postRfidData } = require("../controller/rfid");
const express = require("express");
const router = express.Router();




router.post("/", postRfidData);




module.exports = router