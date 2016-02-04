exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.string('name');
    table.integer('rating');
    table.text('review');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
