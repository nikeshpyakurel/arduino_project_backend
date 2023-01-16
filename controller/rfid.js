const RFID = require("../model/RFID");


const postRfidData = async (req, res) => {
    try {
        const newRFID = await new RFID({
            uid: req.body.uid
        })
        newRFID.save();
        res.status(200).json(newRFID)

    } catch (err) {
        res.status(500).json({ message: 'Error saving RFID data', error: err })
    }
}

const getRfidData = async (req, res) => {
    try {
        const getData = await RFID.find({})
        res.status(200).json(getData)

    } catch (err) {
        res.status(500).json({ message: 'Error saving RFID data', error: err })
    }
}





module.exports = { postRfidData, getRfidData }