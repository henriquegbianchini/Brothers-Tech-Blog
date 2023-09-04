const config = require('./knexfile.js')
const knex = require('knex')(config.development)

knex.migrate.latest([config.development])
module.exports = knex

//Mudar depois pro banco de produção
