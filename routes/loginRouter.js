const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// const usersData = [];

router
  .route("/")
  .get((req, res) => {
    console.log("Get on login");
    // usersData = knex("login");
    // console.log(usersData);
    res.send("Get on login");
  })
  // .post((req, res) => {
  //   // console.log("Post on login");
  //   knex("login")
  //     .insert({
  //       email: req.body.email,
  //       password: req.body.password,
  //     })
  //     .then((data) => {
  //       res.json(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  .post((req, res) => {
    const foundUser = knex("login").where(
      // usersData.find(
      (user) =>
        user.username.toLowerCase() == req.body.username.toLowerCase() &&
        user.password == req.body.password
    );
    if (!foundUser) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    // Generate a JWT token
    const token = jwt.sign(
      { userId: foundUser.id, userName: foundUser.username },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  });

module.exports = router;

// "name": req.body.name,
// table.string("login_created").notNullable(),
// table.string("last_logged_in").notNullable();
