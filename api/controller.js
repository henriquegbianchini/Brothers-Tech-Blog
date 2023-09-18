module.exports = app => {
  
  app.post("/login", app.services.auth.signin)
  app.get("/validateToken", app.services.auth.validateToken)

  app.get("/", app.services.author.get) 
  app.get("/artigos", app.services.articles.get)
  app.get("/categorias", app.services.categories.get)
  app.get("/dashboard", app.services.dashboard.get)

}

