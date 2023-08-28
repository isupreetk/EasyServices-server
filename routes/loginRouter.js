const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router
  .route("/")
  .get((req, res) => {
    console.log("Get on login");
    res.send("Get on login");
  })
  .post((req, res) => {
    // console.log("Post on login");
    knex("users")
      .insert({
        email: req.body.email,
        password: req.body.password,
      })
      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;

// "name": req.body.name,
// table.string("login_created").notNullable(),
// table.string("last_logged_in").notNullable();
