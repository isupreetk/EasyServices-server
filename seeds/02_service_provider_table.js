const knex = require("knex")(require("../knexfile"));

const service_provider_data = [
  {
    id: 1,
    firstname: "Supreet",
    lastname: "Kaur",
    phone: "+1-123-123-1234",
    email: "supreet@easyservices.com",
    apartment: "123",
    street: "",
    city: "Surrey",
    province: "BC",
    country: "Canada",
    age: 25,
    gender: "F",
    status: "Active",
  },

  {
    id: 2,
    firstname: "Simone",
    lastname: "Kaur",
    phone: "+1-123-123-1234",
    email: "simone@easyservices.com",
    apartment: "123",
    street: "",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    age: 18,
    gender: "F",
    status: "Active",
  },
];

exports.seed = function (knex) {
  return knex("service_provider")
    .del()
    .then(() => {
      return knex("service_provider").insert(service_provider_data);
    });
};
