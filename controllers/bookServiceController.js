const knex = require("knex")(require("../knexfile.js"));

// const getBookedService = (_req, res) => {
//   knex("service_category")
//     // .join("service", "service.service_category_id", "service_category.id")
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(400).send("Error getting services");
//     });
// };

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
  //   res.send("Post on booking");
};
// const getSingleServiceCategory = (req, res) => {
//   knex("service_category")
//     .join("service", "service.service_category_id", "service_category.id")
//     .where("service_category_id", req.params.categoryId)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(400).send("Error getting services");
//     });
// };

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
  getBookedService,
  createServiceBooking,
};
