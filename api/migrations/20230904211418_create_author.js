exports.up = function(knex) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary().unique()
    table.boolean('admin').notNull().defaultTo(false)
    table.string('email').notNull().unique()
    table.string('password').notNull().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('author')
};
