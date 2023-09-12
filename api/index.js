const app = require('express')()
const consign = require("consign")
const db = require("./db")

app.db = db

consign()
    .then('./services')
    .then('./middeware.js')
    .then('./controller.js')
    .into(app)

app.listen(3000, () => {
  console.log("api running on localhost:3000")
})
