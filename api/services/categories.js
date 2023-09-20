module.exports = (app) => {

  const get = (req, res) => {
    app.db("category")
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).send(err));
  };

  const save = (req, res) => {
    function existsOrError(value, msg) {
      if (!value) throw msg;
      if (Array.isArray(value) && value.length === 0) throw msg;
      if (typeof value === "string" && !value.trim()) throw msg;
    }

    const category = {
      id: req.body.id,
      name: req.body.name,
    };

    try {
      existsOrError(category.name, "Nome não informado");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (category.id) {
      app.db("category")
        .update(category)
        .where({ id: category.id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app.db("category")
        .insert(category)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const remove = async (req, res) => {
    try {
      existsOrError(req.params.id, "Código da Categoria não informado.");

      const articles = await app.db("article")
        .where({ categoryId: req.params.id });
      notExistsOrError(articles, "Categoria possui artigos.");

      const rowsDeleted = await app.db("category")
        .where({ id: req.params.id }).del();
      existsOrError(rowsDeleted, "Categoria não foi encontrada.");

      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { get, save, remove };
};
