module.exports = app => {

const limit = 10 // usado para paginação

const get = async (req, res) => {
  const page = req.query.page || 1

  const result = await app.db('article').count('id').first()
  const count = parseInt(result.count)

  app.db('article')
    .select('id', 'title', 'description', 'authorId', 'categoryName')
    .limit(limit).offset(page * limit - limit)
    .then(articles => res.json({ data: articles, count, limit }))
    .catch(err => res.status(500).send(err))
}

  return { get }
}
