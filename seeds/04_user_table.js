const knex = require("knex")(require("../knexfile"));

const user_data = [
  {
    id: 1,
    firstname: "Supreet",
    lastname: "Kaur",
    phone: "123456789",
    email: "supreet@easyservices.com",
    apartment: "123",
    street: "",
    city: "Surrey",
    province: "BC",
    country: "Canada",
  },
];

exports.seed = function (knex) {
  return knex("user")
    .del()
    .then(() => {
      return knex("user").insert(user_data);
    });
};
