const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
require("./config/db")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/api", require("./routes/api"))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Estas en el puerto ${PORT}`);
})