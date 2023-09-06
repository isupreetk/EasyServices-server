const knex = require("knex")(require("../knexfile.js"));

const getBookedService = (_req, res) => {
  knex("user_request")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const createServiceBooking = (req, res) => {
  knex("user_request")
    .insert({
      user_id: 1,
      service_category_id: req.body.service_category_id,
      service_id: req.body.service_id,
      appointment_date: req.body.appointment_date,
      slot: req.body.slot,
      user_input: req.body.user_input,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getBookedService,
  createServiceBooking,
};
