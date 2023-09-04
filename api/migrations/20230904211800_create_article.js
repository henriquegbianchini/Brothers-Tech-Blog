exports.up = function(knex) {
  return knex.schema.createTable('article', table => {
    table.increments('id').primary().notNull().unique()
    table.string('title').notNull()
    table.string('description').notNull()
    table.integer('authorId').references('id').inTable('author')
    table.string('categoryName').references('name').inTable('category')
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('article')
};
