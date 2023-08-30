const app = require('express')()
const consign = require("consign")

consign()
    .then('./controller.js')
    .into(app)

console.log("api running on Localhost:5000")
app.listen(5000)
