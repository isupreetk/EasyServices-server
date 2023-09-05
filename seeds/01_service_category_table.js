const knex = require("knex")(require("../knexfile"));
require("dotenv").config;
const api_URL = process.env.API_URL;

const service_category_data = [
  {
    id: 1,
    category_name: "Furniture Assembly",
    category_description: "Get everything assembled",
    image_URL: `${api_URL}/images/category_images/furniture_assembly_category.jpg`,
  },

  {
    id: 2,
    category_name: "Plumbing",
    category_description: "Get everything fixed",
    image_URL: `${api_URL}/images/category_images/plumbing_category.jpg`,
  },

  {
    id: 3,
    category_name: "Patio & Backyard",
    category_description: "Renovate your Patio & Backyard",
    image_URL: `${api_URL}/images/category_images/patio_backyard_category.jpg`,
  },

  {
    id: 4,
    category_name: "Cleaning Services",
    category_description: "Get your stuff cleaned",
    image_URL: `${api_URL}/images/category_images/cleaning_service_category.jpg`,
  },

  {
    id: 5,
    category_name: "Electrical & Lighting",
    category_description: "Get all Electrical Services.",
    image_URL: `${api_URL}/images/category_images/electrical_lighting_category.jpg`,
  },

  {
    id: 6,
    category_name: "Painting & Decoration",
    category_description: "Take care of your Walls & Decor.",
    image_URL: `${api_URL}/images/category_images/painting_category.jpg`,
  },
];

exports.seed = function (knex) {
  return knex("service_category")
    .del()
    .then(() => {
      return knex("service_category").insert(service_category_data);
    });
};
