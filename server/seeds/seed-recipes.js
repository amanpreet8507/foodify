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
      image_url: "https://example.com/chicken-tikka-masala.jpg",
      category: "Indian",
    },
    {
      id: 3,
      name: "Beef Tacos",
      image_url: "https://example.com/beef-tacos.jpg",
      category: "Mexican",
    },
    {
      id: 4,
      name: "Pad Thai",
      image_url: "https://example.com/pad-thai.jpg",
      category: "Thai",
    },
    {
      id: 5,
      name: "Sushi Rolls",
      image_url: "https://example.com/sushi-rolls.jpg",
      category: "Japanese",
    },
    {
      id: 6,
      name: "Hamburger",
      image_url: "https://example.com/hamburger.jpg",
      category: "American",
    },
    {
      id: 7,
      name: "Chicken Curry",
      image_url: "https://example.com/chicken-curry.jpg",
      category: "Indian",
    },
    {
      id: 8,
      name: "Caesar Salad",
      image_url: "https://example.com/caesar-salad.jpg",
      category: "Salad",
    },
    {
      id: 9,
      name: "Pasta Primavera",
      image_url: "https://example.com/pasta-primavera.jpg",
      category: "Italian",
    },
    {
      id: 10,
      name: "Tom Yum Soup",
      image_url: "https://example.com/tom-yum-soup.jpg",
      category: "Thai",
    },
    {
      id: 11,
      name: "Sushi Nigiri",
      image_url: "https://example.com/sushi-nigiri.jpg",
      category: "Japanese",
    },
    {
      id: 12,
      name: "Margherita Pizza",
      image_url: "",
      category: "Italian",
    },
  ]);
};
