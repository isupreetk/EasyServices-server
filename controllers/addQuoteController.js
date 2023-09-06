const knex = require("knex")(require("../knexfile.js"));

const getSingleTask = (req, res) => {
  //   knex("user_request")
  //     .where("user_id", 1)
  //     .where("status", "In Progress")
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((error) => {
  //       res.send(error);
  //     });
  let { id } = req.params;

  knex("user_request")
    // .select(
    //   "category_name",
    //   "category_description",
    //   "firstname",
    //   "appointment_date",
    //   "slot",
    //   "service.name",
    //   knex.raw("CONCAT(firstname, ' ', lastname) AS service_provider_name"),
    //   "quote.user_request_id",
    //   "quote.amount",
    //   "quote.estimated_duration",
    //   "quote.description"
    // )
    // .from("quote")
    // .join("user_request", "user_request_id", "user_request.id")
    .join("service_category", "service_category_id", "service_category.id")
    .join("service", "user_request.service_id", "service.id")
    // .join(
    //   "service_provider",
    //   "quote.service_provider_id",
    //   "service_provider.id"
    // )
    .where("user_request.status", "In Progress")
    .where("user_request.id", id)
    // .orderBy("quote.id")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const createQuote = (req, res) => {
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
