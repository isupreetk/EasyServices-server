const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router
  .route("/")
  .get((req, res) => {
    console.log("Get on signup");
    res.send("Get on signup");
  })

  .post((req, res) => {
    knex("login")
      .insert(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  });

module.exports = router;
