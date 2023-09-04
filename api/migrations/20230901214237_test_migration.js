exports.up = function(knex) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary().notNull()
    table.string('name').notNull()
    table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('author')
};
