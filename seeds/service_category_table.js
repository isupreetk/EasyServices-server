// const knex = require("knex")(require("../knexfile"));

const service_category_data = [
  {
    id: 1,
    category_name: "Plumbing",
    category_description: "Water related issues",
    image_URL: "",
  },

  {
    id: 2,
    category_name: "Electrical Works",
    category_description: "Electricity related issues",
    image_URL: "",
  },

  {
    id: 3,
    category_name: "Woodwork",
    category_description: "Wood related issues",
    image_URL: "",
  },
];

const service_data = [
  {
    id: 1,
    name: "Leaky taps",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 2,
    name: "Leaky flush",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 3,
    name: "Switch not working",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 4,
    name: "AC installation",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 5,
    name: "Door fixing",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 6,
    name: "Kitchen renovation",
    description: "Can fix almost everything!",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },
];

exports.seed = function (knex) {
  return knex("service_category")
    .del()
    .then(() => {
      return knex("service_category").insert(service_category_data);
    })
    .then(() => {
      return knex("service").del();
    })
    .then(() => {
      return knex("service").insert(service_data);
    });
};
