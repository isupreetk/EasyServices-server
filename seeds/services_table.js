exports.seed = function (knex) {
  return knex("services")
    .del()
    .then(function () {
      return knex("services").insert([
        {
          service_id: 1,
          service_name: "Plumbing",
          service_provider: "Bob",
          service_provider_location: "Vancouver",
          cost: "199.99",
        },

        {
          service_id: 2,
          service_name: "Electrician",
          service_provider: "Dob",
          service_provider_location: "Richmond",
          cost: "299.99",
        },

        {
          service_id: 3,
          service_name: "HandyMan",
          service_provider: "Clob",
          service_provider_location: "Surrey",
          cost: "99.99",
        },
      ]);
    });
};
