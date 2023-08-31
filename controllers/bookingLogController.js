const knex = require("knex")(require("../knexfile"));

const getInProgressTasks = (_req, res) => {
  //   knex("user_request")
  //     .where("user_id", 1)
  //     .where("status", "In Progress")
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((error) => {
  //       res.send(error);
  //     });

  knex
    .select(
      "category_name",
      "category_description",
      "firstname",
      knex.raw("CONCAT(firstname, ' ', lastname) AS service_provider_name"),
      "quote.user_request_id",
      "quote.amount",
      "quote.estimated_duration",
      "quote.description"
    )
    .from("quote")
    .join("user_request", "user_request_id", "user_request.id")
    .join("service_category", "service_category_id", "service_category.id")
    .join(
      "service_provider",
      "quote.service_provider_id",
      "service_provider.id"
    )
    .where("user_request.status", "In Progress")
    .orderBy("quote.id")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const getCompletedTasks = (_req, res) => {
  //   knex("user_request")
  //     .where("user_id", 1)
  //     .where("status", "Completed")
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((error) => {
  //       res.send(error);
  //     });

  knex
    .select(
      "category_name",
      "category_description",
      "firstname",
      knex.raw("CONCAT(firstname, ' ', lastname) AS service_provider_name"),
      "quote.user_request_id",
      "quote.amount",
      "quote.estimated_duration",
      "quote.description"
    )
    .from("quote")
    .join("user_request", "user_request_id", "user_request.id")
    .join("service_category", "service_category_id", "service_category.id")
    .join(
      "service_provider",
      "quote.service_provider_id",
      "service_provider.id"
    )
    .where("user_request.status", "Completed")
    .orderBy("quote.id")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getInProgressTasks,
  getCompletedTasks,
};
