module.exports = app => {
  
  app.post("/login", app.services.auth.signin)
  app.get("/validateToken", app.services.auth.validateToken)

  app.get("/", app.services.author.get) 

  app.route('/artigos')
    .all(app.services.jwt.authenticate())
      .get(app.services.articles.get)
      .put(app.services.articles.save)
      .post(app.services.articles.remove)

  app.route("/categorias")
    .all(app.services.jwt.authenticate())
      .get(app.services.categories.get)
      .put(app.services.categories.save)
      .post(app.services.categories.remove)

  app.get("/dashboard", app.services.dashboard.get)

}

