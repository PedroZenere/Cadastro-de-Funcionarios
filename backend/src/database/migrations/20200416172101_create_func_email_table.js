
exports.up = function(knex) {
    return knex.schema.createTable('email', function(table) {
        table.string('email_id').notNullable()
        table.string('email').notNullable()

        table.foreign('email_id').references('id').inTable('funcionarios')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('email')
};
