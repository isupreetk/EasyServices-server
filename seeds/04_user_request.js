const knex = require("knex")(require("../knexfile"));

const user_request_data = [
  {
    id: 1,
    user_id: 1,
    service_category_id: 1,
    service_id: 1,
    appointment_date: "2023-09-01",
    slot: "08:00",
    user_input: "test1",
    created_on: knex.fn.now(),
    status: "In Progress",
    service_provider_id: 1,
  },

  {
    id: 2,
    user_id: 1,
    service_category_id: 2,
    service_id: 4,
    appointment_date: "2023-09-02",
    slot: "10:00",
    user_input: "test2",
    created_on: knex.fn.now(),
    status: "Completed",
    service_provider_id: 1,
  },
];

exports.seed = function (knex) {
  return knex("user_request")
    .del()
    .then(() => {
      return knex("user_request").insert(user_request_data);
    });
};
