exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("favourites").del();
  await knex("favourites").insert([
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image_url: "/images/SpaghettiCarbonara.jpg",
      category: "Italian",
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      image_url: "/images/chicken-tikka-masala.jpg",
      category: "Indian",
    },
  ]);
};
