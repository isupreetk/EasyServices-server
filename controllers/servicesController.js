const knex = require("knex")(require("../knexfile.js"));

const index = (_req, res) => {
  knex("service")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting services");
    });
};

const getSingleService = (req, res) => {
  knex("service")
    .where("service_category_id", req.params.id)
    // .where("id", req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting services");
    });
};

module.exports = {
  index,
  getSingleService,
};
