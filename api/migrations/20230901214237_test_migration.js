
exports.up = function(knex) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary().notNull()
    table.varchar('name').string().notNull()
    table.boolean('admin').notNull().defaultTo(false)
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('author')
};
