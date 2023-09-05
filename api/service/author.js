module.exports = app => {

const get = (req, res) => {
  app.db('author')
    .select('id', 'name')
    .then(author => res.json(author))
  }





  return { get }
}
