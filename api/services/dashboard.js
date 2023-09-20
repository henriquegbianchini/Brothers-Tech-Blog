module.exports = app => {

const get = (req, res) => {
  app.db('category')
    .select('name')
    .then(author => res.json(author))
  }





  return { get }
}
