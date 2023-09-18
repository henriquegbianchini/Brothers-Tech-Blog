module.exports = (app) => {
  const get = (req, res) => {
    app.db("categories")
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app.db("categories")
      .where({ id: req.params.id })
      .first()
      .then((category) => res.json(category))
      .catch((err) => res.status(500).send(err));
  };

  const save = (req, res) => {

    function existsOrError(value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
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
      app.db("categories")
        .update(category)
        .where({ id: category.id })
        .then((_) => res.status(204).send())

        .catch((err) => res.status(500).send(err));
    } else {
      app.db("categories")
        .insert(category)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  return { get, getById, save };
};
