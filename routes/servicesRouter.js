const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.route("/").get((req, res) => {
  knex("services")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send("Error getting services");
    });
  //   console.log("Get on services");
  //   res.send("Get on services");
});

module.exports = router;
