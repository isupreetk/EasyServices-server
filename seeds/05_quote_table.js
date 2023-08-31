const knex = require("knex")(require("../knexfile"));

const quote_data = [
  {
    id: 1,
    user_request_id: 1,
    service_provider_id: 1,
    amount: "$ 99.99",
    created_on: knex.fn.now(),
    estimated_duration: "1 hour",
  },

  {
    id: 2,
    user_request_id: 1,
    service_provider_id: 2,
    amount: "$ 199.99",
    created_on: knex.fn.now(),
    estimated_duration: "30 minutes",
  },

  {
    id: 3,
    user_request_id: 2,
    service_provider_id: 1,
    amount: "$ 399.99",
    created_on: knex.fn.now(),
    estimated_duration: "1 hour",
  },

  {
    id: 4,
    user_request_id: 2,
    service_provider_id: 2,
    amount: "$ 499.99",
    created_on: knex.fn.now(),
    estimated_duration: "30 minutes",
  },
];

exports.seed = function (knex) {
  return knex("quote")
    .del()
    .then(() => {
      return knex("quote").insert(quote_data);
    });
};
