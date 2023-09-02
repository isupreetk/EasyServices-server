const knex = require("knex")(require("../knexfile"));
require("dotenv").config;
const api_URL = process.env.API_URL;

const service_category_data = [
  {
    id: 1,
    category_name: "Furniture Assembly",
    category_description: "Get everything Assembled",
    image_URL: `${api_URL}/images/category_images/furniture_assembly_category.jpg`,
  },

  {
    id: 2,
    category_name: "Plumbing",
    category_description: "Get everyhting fixed",
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
    category_description:
      "We can connect you with a qualified Local Pro you can trust for your Electrical Services needs. Hiring a licensed electrician makes it easier for you to take care of your home improvement projects, wherever or whenever they arise.",
    image_URL: `${api_URL}/images/category_images/electrical_lighting_category.jpg`,
  },

  {
    id: 6,
    category_name: "Painting & Decoration",
    category_description:
      "You can easily take care of your House Painting, Drywall Repair and Wallpaper projects, wherever or whenever they arise.",
    image_URL: `${api_URL}/images/category_images/electrical_lighting_category.jpg`,
  },
];

exports.seed = function (knex) {
  return knex("service_category")
    .del()
    .then(() => {
      return knex("service_category").insert(service_category_data);
    });
};
