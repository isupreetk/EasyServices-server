const knex = require("knex")(require("../knexfile.js"));

const getSingleTask = (req, res) => {
  let { id } = req.params;

  knex("user_request")
    .join("service_category", "service_category_id", "service_category.id")
    .join("service", "user_request.service_id", "service.id")
    .where("user_request.status", "In Progress")
    .where("user_request.id", id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const createQuote = (req, res) => {
  let { id } = req.params;
  knex("quote")
    .insert({
      user_request_id: req.body.user_request_id,
      service_provider_id: 1,
      amount: req.body.amount,
      estimated_duration: req.body.estimated_duration,
      description: req.body.description,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getSingleTask,
  createQuote,
};
