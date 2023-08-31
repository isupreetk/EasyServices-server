const knex = require("knex")(require("../knexfile"));

const getInProgressTasks = (_req, res) => {
  knex("user_request")
    .where("user_id", 1)
    .where("status", "In Progress")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const getCompletedTasks = (_req, res) => {
  knex("user_request")
    .where("user_id", 1)
    .where("status", "Completed")
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
