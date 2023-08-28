const knex = require("knex")(require("../knexfile.js"));

const getAllServiceCategory = (_req, res) => {
  knex("service_category")
    // .join("service", "service.service_category_id", "service_category.id")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting services");
    });
};

const getSingleServiceCategory = (req, res) => {
  knex("service_category")
    .join("service", "service.service_category_id", "service_category.id")
    .where("service_category_id", req.params.categoryId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting services");
    });
};

// const getSingleService = (req, res) => {
//   knex("service_category")
//     .join("service", "service.service_category_id", "service_category.id")
//     .where("service_category_id", `${req.params.categoryId}`)
//     .where("id", `${req.params.serviceId}`)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(400).send("Error getting services");
//     });
// };

// const updateSingleService = (req, res) => {
//   knex("service").where("service_category_id");
// };

module.exports = {
  getAllServiceCategory,
  getSingleServiceCategory,
};
