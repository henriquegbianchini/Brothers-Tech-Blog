module.exports = app => {
  
  app.get("/", app.service.author.get) 

  app.get("/contato", (req, res) => {
    res.send("contato page")
  })

  app.get("/sobre", (req, res) => {
    res.send("sobre page")
  })

  app.get("/artigos", (req, res) => {
    res.send("artigos page")
  })

}



