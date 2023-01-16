const RFID = require("../model/RFID");


const postRfidData = (req, res) => {
    // Create new RFID
    const newRFID = new RFID({
        uid: req.body.uid
    })

    // Save RFID to database
    newRFID.save()
        .then(rfid => {
            res.status(200).json({ message: 'RFID data saved', data: rfid })
        })
        .catch(err => {
            res.status(500).json({ message: 'Error saving RFID data', error: err })
        })
}





module.exports = { postRfidData }