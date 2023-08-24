const knex = require("knex")(require("../knexfile"));

exports.up = function (knex) {
  return knex.schema.createTable("queries_raised", (table) => {
    table.increments("query_id").primary(),
      table.string("query_raised_by").notNullable(),
      table.string("query_category").notNullable(),
      table.string("query_description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("queries_raised");
};
