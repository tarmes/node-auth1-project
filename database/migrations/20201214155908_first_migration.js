
exports.up = function(knex) {
   return knex.schema
      .createTable('roles', table => {
         table.increments();
         table.string('name', 128).notNullable().unique();
      })
      .createTable('users', table => {
         table.increments();
         table.string('username', 128).notNullable().unique();
         table.string('password', 128).notNullable().unique();
         table.integer('role')
            .unsigned()
            .references('id').inTable('roles')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
      })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('roles');
};
