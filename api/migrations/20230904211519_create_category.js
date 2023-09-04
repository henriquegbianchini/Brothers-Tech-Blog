exports.up = function(knex) {
  return knex.schema.createTable('category', table =>{
    table.increments('id').primary().notNull().unique()
    table.string('name').unique().notNull()
    table.integer('authorId').references('id').inTable('author')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('category')
};
