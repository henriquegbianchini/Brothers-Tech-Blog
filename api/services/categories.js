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

  return { get, getById };
};
