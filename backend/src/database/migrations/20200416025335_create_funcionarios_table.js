
exports.up = function(knex) {
  return knex.schema.createTable('funcionarios', function(table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('lastname').notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('funcionarios')
};
