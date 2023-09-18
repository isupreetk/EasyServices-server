const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

router
  .route("/")
  .get((req, res) => {
    console.log("Get on login");
    res.send("Get on login");
  })

  .post((req, res) => {
    knex("login")
      .where("username", req.body.username.toLowerCase())
      .where("password", req.body.password)
      .then((data) => {
        // Generate a JWT token
        if (data.length === 0) {
          res.status(401).json({ message: "Authentication failed" });
        } else {
          const token = jwt.sign(
            {
              userId: data[0].id,
              userName: data[0].username,
              serviceProvider: data[0].service_provider,
            },
            JWT_SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json({
            token: token,
            username: data[0].username,
            service_provider: data[0].service_provider,
          });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

module.exports = router;
