
exports.up = function(knex) {
    return knex.schema.createTable('telefone', function(table) {
        table.string('tel_id').notNullable()
        table.string('telefone').notNullable()

        table.foreign('tel_id').references('id').inTable('funcionarios')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefone')
};
