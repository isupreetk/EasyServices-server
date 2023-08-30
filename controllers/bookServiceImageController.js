const express = require("express");
const knex = require("knex")(require("../knexfile"));

const createServiceImage = (req, res) => {
  return knex("user_request_files")
    .insert(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
  // };
};

module.exports = {
  createServiceImage,
};
