module.exports = (app) => {
  const limit = 10; // usado para paginação

  const get = async (req, res) => {
    const page = req.query.page || 1;

    const result = await app.db("article").count("id").first();
    const count = parseInt(result.count);

    app.db("article")
      .select("id", "title", "description", "authorId", "categoryName")
      .limit(limit).offset(page * limit - limit)
      .then((articles) => res.json({ data: articles, count, limit }))
      .catch((err) => res.status(500).send(err));
  };

  const save = (req, res) => {
    function existsOrError(value, msg) {
      if (!value) throw msg;
      if (Array.isArray(value) && value.length === 0) throw msg;
      if (typeof value === "string" && !value.trim()) throw msg;
    }

    const article = { ...req.body };
    if (req.params.id) article.id = req.params.id;

    try {
      existsOrError(article.title, "Nome não informado");
      existsOrError(article.description, "Descrição não informada");
      existsOrError(article.categoryName, "Categoria não informada");
      existsOrError(article.authorId, "Autor não informado");
    } catch (msg) {
      res.status(400).send(msg);
    }

    if (article.id) {
      app.db("article")
        .update(article)
        .where({ id: article.id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app.db("article")
        .insert(article)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const remove = async (req, res) => {
    function existsOrError(value, msg) {
      if (!value) throw msg;
      if (Array.isArray(value) && value.length === 0) throw msg;
      if (typeof value === "string" && !value.trim()) throw msg;
    }

    try {
      const rowsDeleted = await app.db("article")
        .where({ id: req.params.id }).del();

      try {
        existsOrError(rowsDeleted, "Artigo não foi encontrado.");
      } catch (msg) {
        return res.status(400).send(msg);
      }

      res.status(204).send();
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  return { get, save, remove };
};
