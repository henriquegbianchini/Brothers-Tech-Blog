module.exports = app => {
  
  app.post("/login", app.services.auth.signin)
  app.get("/validateToken", app.services.auth.validateToken)

  app.get("/", app.services.author.get) 

  app.route('/artigos')
    .get("/artigos", app.services.articles.get)
    .put("/artigos", app.services.articles.save)
    .post("/artigos", app.services.articles.remove)

  app.get("/categorias", app.services.categories.get)
  app.put("/categorias", app.services.categories.save)
  app.post("/categorias", app.services.categories.remove)

  app.get("/dashboard", app.services.dashboard.get)

}

