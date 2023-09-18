module.exports = app => {

const get = (req, res) => {
  app.db('author')
    .select('id', 'email', 'password', 'admin')
    .then(author => res.json(author))
  }

  return { get }
}
