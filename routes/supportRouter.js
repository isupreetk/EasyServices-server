const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.route("/").post((req, res) => {
  knex("queries_raised")
    .insert({
      query_raised_by: "Supreet",
      query_category: req.body.query_category,
      query_description: req.body.query_description,
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
