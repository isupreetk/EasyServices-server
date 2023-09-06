const knex = require("knex")(require("../knexfile.js"));

const getAllRequests = (_req, res) => {
  knex("user_request")
    .where("status", "In Progress")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting requests");
    });
};

module.exports = {
  getAllRequests,
};
