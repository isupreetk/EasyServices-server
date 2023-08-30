const express = require("express");
const knex = require("knex")(require("../knexfile"));

const createServiceImage = (req, res) => {
  //   console.log("body", req.body);
  //   console.log("file", req.file);

  const file = req.file;
  const user_request_id = req.body.user_request_id;

  //   console.log("file", file);
  //   console.log("user_request_id", user_request_id);

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
