const express = require("express");
const knex = require("knex")(require("../knexfile"));

const createServiceImage = (req, res) => {

  const file = req.file;
  const user_request_id = req.body.user_request_id;

  return knex("user_request_files")
    .insert({
      user_request_id: user_request_id,
      file_URL: file.path,
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      return res.send(error);
    });
};

module.exports = {
  createServiceImage,
};
