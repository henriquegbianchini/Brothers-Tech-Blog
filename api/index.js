const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello world")
})

console.log("Api running on Localhost:5000")
app.listen(5000)
