const knex = require("knex")(require("../knexfile"));
require("dotenv").config;
const api_URL = process.env.API_URL;

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
    image_URL: `${api_URL}/images/service_images/bathtub_recaulking.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 6,
    name: "Leak Repair",
    description: "Leak Repair",
    image_URL: `${api_URL}/images/service_images/leak_repair.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 7,
    name: "Pipe Repair",
    description: "Pipe Repair",
    image_URL: `${api_URL}/images/service_images/pipe_repair.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 8,
    name: "Sprinkler System Installation & Repair",
    description: "Sprinkler System Installation & Repair",
    image_URL: `${api_URL}/images/service_images/sprinkler_system.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 9,
    name: "Water Heater Installation",
    description: "Water Heater Installation",
    image_URL: `${api_URL}/images/service_images/hot_water_tank.jpg`,
    estimated_cost: "$99.99 - $259.99",
    location: "Vancouver",
    service_category_id: 2,
  },

  {
    id: 10,
    name: "Artificial Turf Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/artificial_turf.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 11,
    name: "Shed Installation Service",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/shed_installation.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 12,
    name: "Outdoor Lighting Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/outdoor_lighting.jpeg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 13,
    name: "Gazebo Installation Service",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/gazebo_installation.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 14,
    name: "Fire Pit Installation",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/fire_pit.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 3,
  },

  {
    id: 15,
    name: "Junk Removal",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/junk_removal.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },

  {
    id: 16,
    name: "HVAC Maintenance",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/hvac_maintenance.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 17,
    name: "Air Duct & Furnace Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/duct-cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 18,
    name: "Move in & out Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/moving_cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 19,
    name: "House Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/house_cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 20,
    name: "Window Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/window_cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },
  {
    id: 21,
    name: "Yard Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/yard_cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },

  {
    id: 22,
    name: "Professional Carpet Cleaning",
    description: "Enjoy the feeling of a garden sitting in your backyard",
    image_URL: `${api_URL}/images/service_images/carpet_cleaning.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 4,
  },

  {
    id: 23,
    name: "Ceiling Fan Installation",
    description:
      "Installing a ceiling fan can enhance air circulation and improve comfort in your room or living space.",
    image_URL: `${api_URL}/images/service_images/ceiling_fan.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 5,
  },

  {
    id: 24,
    name: "Bathroom Fan Installation",
    description:
      "Installing a new bathroom fan improves ventilation and reduces moisture, providing fresh air and preventing mould in your bathroom.",
    image_URL: `${api_URL}/images/service_images/bathroom_fan.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 5,
  },

  {
    id: 25,
    name: "Lighting Fixture Installation",
    description:
      "Updated lighting fixtures can add a refreshing sense of style and warmer ambience to your living space.",
    image_URL: `${api_URL}/images/service_images/lighting_fixture.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 5,
  },

  {
    id: 26,
    name: "Outdoor Lighting Installation",
    description:
      "Outdoor lights add functionality, safety and style to your home’s exterior, whether it’s a porch, deck, patio, walkway or more.",
    image_URL: `${api_URL}/images/service_images/outdoor_lighting.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 5,
  },

  {
    id: 27,
    name: "Holiday Light Installation",
    description:
      "A licensed electrician can install holiday lights for your home, as well as any new exterior wiring or outlets to power your display.",
    image_URL: `${api_URL}/images/service_images/holiday_light.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 5,
  },

  {
    id: 28,
    name: "Deck Painting",
    description:
      "Find an experienced Local Pro to put the finishing touches on a new deck or bring new vitality to an existing one",
    image_URL: `${api_URL}/images/service_images/deck_painting.png`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 29,
    name: "Ceiling Patching",
    description:
      "Hire a Local Pro to get rid of cracks, holes and other unsightly flaws in your ceilings",
    image_URL: `${api_URL}/images/service_images/ceiling_patching.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 30,
    name: "Interior Painting",
    description:
      "Refresh your home’s interiors with a palette of new colours. Find a skilled Local Pro to get the job done",
    image_URL: `${api_URL}/images/service_images/interior_painting.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 31,
    name: "Wall Texturing",
    description:
      "Find an experienced Local Pro to give a textured look and feel to your walls",
    image_URL: `${api_URL}/images/service_images/wall_texturing.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 32,
    name: "Fence Painting",
    description:
      "Give a clean new look to a tired old fence, or put the finishing touches on a new one, with the help of a Local Pro",
    image_URL: `${api_URL}/images/service_images/fence_painting.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 33,
    name: "Wallpaper Removal",
    description:
      "Need to get rid of tired old wallpaper? Let the Home Depot connect you with a skilled Local Pro to get it done",
    image_URL: `${api_URL}/images/service_images/wallpaper_removal.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },

  {
    id: 34,
    name: "Wallpaper Installation",
    description:
      "  Bring a classic or modern sense of style to your home with Wallpaper Installation from a skilled Local Pro",
    image_URL: `${api_URL}/images/service_images/wallpaper_installation.jpg`,
    estimated_cost: "99.99 - 199.99",
    location: "Vancouver",
    service_category_id: 6,
  },
];

exports.seed = function (knex) {
  return knex("service")
    .del()
    .then(() => {
      return knex("service").insert(service_data);
    });
};
