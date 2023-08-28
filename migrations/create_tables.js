exports.up = function (knex) {
  return knex.schema
    .createTable("service_category", (table) => {
      table.increments("id").primary(),
        table.string("category_name").notNullable(),
        table.string("category_description").notNullable(),
        table.string("image_URL").notNullable();
    })
    .createTable("service", (table) => {
      table.increments("id").primary,
        table.string("name").notNullable(),
        table.string("description").notNullable(),
        table.string("image_URL").notNullable(),
        table.string("estimated_cost").notNullable(),
        table.string("location").notNullable(),
        table
          .integer("service_category_id")
          .unsigned()
          .references("service_category.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
    })
    .createTable("user", (table) => {
      table.increments("id").primary(),
        table.string("firstname").notNullable(),
        table.string("lastname").notNullable(),
        table.string("phone").notNullable(),
        table.string("email").notNullable(),
        table.string("apartment").notNullable(),
        table.string("street").notNullable(),
        table.string("city").notNullable(),
        table.string("province").notNullable(),
        table.string("country").notNullable();
    })
    .createTable("service_provider", (table) => {
      table.increments("id").primary(),
        table.string("firstname").notNullable(),
        table.string("lastname").notNullable(),
        table.string("phone").notNullable(),
        table.string("email").notNullable(),
        table.string("apartment").notNullable(),
        table.string("street").notNullable(),
        table.string("city").notNullable(),
        table.string("province").notNullable(),
        table.string("country").notNullable(),
        table.integer("age").notNullable(),
        table.string("gender").notNullable(),
        table.string("status").notNullable();
    })
    .createTable("user_request", (table) => {
      table.increments("id").primary(),
        table
          .integer("user_id")
          .unsigned()
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table
          .integer("service_category_id")
          .unsigned()
          .references("service_category.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table
          .integer("service_id")
          .unsigned()
          .references("service.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table.timestamp("created_on").defaultTo(knex.fn.now()),
        table.string("status"),
        table
          .integer("service_provider_id")
          .unsigned()
          .references("service_provider.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
    })
    .createTable("queries_raised", (table) => {
      table.increments("id").primary(),
        table
          .integer("user_request_id")
          .unsigned()
          .references("user_request.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table.string("query_category").notNullable(),
        table.string("query_description").notNullable(),
        table.string("image_URL").notNullable(),
        table.timestamp("raised_on").defaultTo(knex.fn.now()),
        table.string("status").notNullable();
    })
    .createTable("ratings_reviews", (table) => {
      table.increments("id").primary(),
        table
          .integer("user_request_id")
          .unsigned()
          .references("user_request.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table.integer("rating"),
        table.string("review");
    })
    .createTable("quote", (table) => {
      table.increments("id").primary(),
        table
          .integer("user_request_id")
          .unsigned()
          .references("user_request.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table
          .integer("service_provider_id")
          .unsigned()
          .references("service_provider.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table.string("amount").notNullable();
      table.timestamp("created_on").defaultTo(knex.fn.now()),
        table.string("estimated_duration").notNullable();
    })
    .createTable("payment", (table) => {
      table.increments("id").primary(),
        table
          .integer("user_request_id")
          .unsigned()
          .references("user_request.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE"),
        table.string("amount").notNullable(),
        table.string("status").notNullable(),
        table.string("transaction_date");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("payment")
    .dropTable("quote")
    .dropTable("ratings_reviews")
    .dropTable("queries_raised")
    .dropTable("user_request")
    .dropTable("service_provider")
    .dropTable("user")
    .dropTable("service")
    .dropTable("service_category");
};
