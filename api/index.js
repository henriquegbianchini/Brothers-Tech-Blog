const app = require('express')()
const consign = require("consign")
const db = require("./db")

app.db = db

consign()
    .then('./service')
    .then('./middeware.js')
    .then('./controller.js')
    .into(app)

console.log("api running on Localhost:5000")
app.listen(5000)
