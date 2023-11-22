const connectmongodb = require("./db");
const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')
const port = 5000
connectmongodb();  
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/authorization",require("./routes/authorization"))
// app.use("/api/auth", require("./routes/auth"))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.listen(port, () => {
    console.log(`Connected Server http://localhost:5000`);
})