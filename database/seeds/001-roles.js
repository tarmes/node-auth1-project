
exports.seed = function(knex) {

  const roles = [
    {
      name: "admin", // will get id 1
    },
    {
      name: "user", // will get id 2
    },
  ];

  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert(roles)
        .then(() => {
          console.log("\n== Seed data for roles table added. ==\n")
        });
    });
};
