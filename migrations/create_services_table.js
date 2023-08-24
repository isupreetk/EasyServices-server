exports.up = function (knex) {
  return knex.schema.createTable("services", (table) => {
    table.increments("service_id").primary(),
      table.string("service_name").notNullable(),
      table.string("service_provider").notNullable(),
      table.string("service_provider_location").notNullable(),
      table.string("cost").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("services");
};
