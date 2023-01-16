require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const rfidRoute = require("./routes/rfid");


app.use(express.json());
app.use(bodyParser.json())



// routes
app.use("/api/v1/rfid", rfidRoute);


// Connect to MongoDB
const port = process.env.PORT || 3001

mongoose.set('strictQuery', false).connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {

    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}).catch((err) => {
    console.log(`${err} didn't connect`)
})