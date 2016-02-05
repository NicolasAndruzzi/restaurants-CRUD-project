exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('Position');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
