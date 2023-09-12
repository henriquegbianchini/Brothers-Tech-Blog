module.exports = app => {

const get = (req, res) => {
  // app.db('articles')
  //   .select('name')
  //   .then(author => res.json(author))
    res.send('articles runnign')
  }





  return { get }
}
