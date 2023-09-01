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
];

const service_data = [
  {
    id: 1,
    name: "Bedroom Furniture",
    description: "Beds, Dressers, Chests, Armoires & Wardrobes ",
    image_URL: `${api_URL}/images/service_images/bedroom_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 2,
    name: "Kitchen & Dining",
    description: "Buffets, Sideboards, Cabinets",
    image_URL: `${api_URL}/images/service_images/kitchen_dining_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 3,
    name: "Living Room Furniture",
    description: "Media Storage,TV Stands, Couches",
    image_URL: `${api_URL}/images/service_images/living_room_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 4,
    name: "Office Furniture",
    description: "Desks, Bookcases and Bookshelves",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 1,
  },

  {
    id: 5,
    name: "Bathtub & Shower Re-caulking",
    description: "Bathtub & Shower Re-caulking",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 6,
    name: "Leak Repair",
    description: "Leak Repair",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 7,
    name: "Pipe Repair",
    description: "Pipe Repair",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 8,
    name: "Sprinkler System Installation & Repair",
    description: "Sprinkler System Installation & Repair",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 9,
    name: "Water Heater Installation",
    description: "Water Heater Installation",
    image_URL: `${api_URL}/images/service_images/office_furniture.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 10,
    name: "Artificial Turf Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 11,
    name: "Shed Installation Service",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 12,
    name: "Outdoor Lighting Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 13,
    name: "Gazebo Installation Service",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 14,
    name: "Fire Pit Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 15,
    name: "Junk Removal",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },

  {
    id: 16,
    name: "HVAC Maintenance",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 17,
    name: "Air Duct & Furnace Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 18,
    name: "Move in & out Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 19,
    name: "House Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 20,
    name: "Window Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 21,
    name: "Yard Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },

  {
    id: 22,
    name: "Professional Carpet Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: "",
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
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
