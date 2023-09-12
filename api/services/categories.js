module.exports = app => {

const get = (req, res) => {
  app.db('categories')
    .select('name')
    .then(author => res.json(author))
  }





  return { get }
}
