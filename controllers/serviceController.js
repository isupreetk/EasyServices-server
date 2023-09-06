const knex = require("knex")(require("../knexfile.js"));

const getAllServiceCategory = (_req, res) => {
  knex("service_category")
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

module.exports = {
  getAllServiceCategory,
  getSingleServiceCategory,
};
