const express = require("express")
const app = express()
const PORT = 5000
const mongoose = require("mongoose")
const { MONGOURL } = require("./keys")

mongoose.connect(MONGOURL)
mongoose.connection.on("connected", () => console.log("Database connected successfully"))
mongoose.connection.on("error", error => console.log(error))

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require("./routes/auth.js"))
app.use(require("./routes/post.js"))
app.use(require("./routes/user.js"))

app.listen(PORT, () => {
  console.log("App has been started at port 5000")
})
