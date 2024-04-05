exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").del();
  await knex("recipes").insert([
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
    {
      id: 3,
      name: "Beef Tacos",
      image_url: "/images/beef-tacos.jpg",
      category: "Mexican",
    },
    {
      id: 4,
      name: "Pad Thai",
      image_url: "/images/PadThai.jpg",
      category: "Thai",
    },
    {
      id: 5,
      name: "Sushi Rolls",
      image_url: "/images/SushiRolls.jpg",
      category: "Japanese",
    },
    {
      id: 6,
      name: "Hamburger",
      image_url: "/images/Hamburger.jpg",
      category: "American",
    },
    {
      id: 7,
      name: "Chicken Curry",
      image_url: "/images/ChickenCurry.jpg",
      category: "Indian",
    },
    {
      id: 8,
      name: "Caesar Salad",
      image_url: "/images/CaesarSalad.jpg",
      category: "Salad",
    },
    {
      id: 9,
      name: "Pasta Primavera",
      image_url: "/images/PastaPrimavera.jpg",
      category: "Italian",
    },
    {
      id: 10,
      name: "Tom Yum Soup",
      image_url: "/images/TomYumSoup.jpg",
      category: "Thai",
    },
    {
      id: 11,
      name: "Sushi Nigiri",
      image_url: "/images/SushiNigiri.jpg",
      category: "Japanese",
    },
    {
      id: 12,
      name: "Margherita Pizza",
      image_url: "/images/Margherita-Pizza.jpg",
      category: "Italian",
    },
  ]);
};
