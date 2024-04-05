exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingrediants").del();
  await knex("ingrediants").insert([
    // Spaghetti Carbonara
    { id: 1, recipe_id: 1, name: "Spaghetti", quantity: "200g" },
    { id: 2, recipe_id: 1, name: "Pancetta", quantity: "100g" },
    { id: 3, recipe_id: 1, name: "Eggs", quantity: "2" },
    { id: 4, recipe_id: 1, name: "Parmesan Cheese", quantity: "50g" },
    { id: 5, recipe_id: 1, name: "Black Pepper", quantity: "To taste" },
    { id: 6, recipe_id: 1, name: "Salt", quantity: "To taste" },

    // Chicken Tikka Masala
    { id: 7, recipe_id: 2, name: "Chicken Breast", quantity: "500g" },
    { id: 8, recipe_id: 2, name: "Yogurt", quantity: "200g" },
    { id: 9, recipe_id: 2, name: "Tomato Sauce", quantity: "400g" },
    { id: 10, recipe_id: 2, name: "Garam Masala", quantity: "2 tsp" },
    { id: 11, recipe_id: 2, name: "Garlic", quantity: "3 cloves" },
    { id: 12, recipe_id: 2, name: "Ginger", quantity: "1 inch" },
    // Beef Tacos
    { id: 13, recipe_id: 3, name: "Ground Beef", quantity: "500g" },
    { id: 14, recipe_id: 3, name: "Taco Shells", quantity: "6" },
    { id: 15, recipe_id: 3, name: "Lettuce", quantity: "1 head" },
    { id: 16, recipe_id: 3, name: "Tomatoes", quantity: "2" },
    { id: 17, recipe_id: 3, name: "Cheddar Cheese", quantity: "100g" },
    { id: 18, recipe_id: 3, name: "Onion", quantity: "1" },

    // Pad Thai
    { id: 19, recipe_id: 4, name: "Rice Noodles", quantity: "200g" },
    { id: 20, recipe_id: 4, name: "Shrimp", quantity: "200g" },
    { id: 21, recipe_id: 4, name: "Tofu", quantity: "100g" },
    { id: 22, recipe_id: 4, name: "Bean Sprouts", quantity: "100g" },
    { id: 23, recipe_id: 4, name: "Eggs", quantity: "2" },
    { id: 24, recipe_id: 4, name: "Peanuts", quantity: "50g" },

    // Sushi Rolls
    { id: 25, recipe_id: 5, name: "Sushi Rice", quantity: "2 cups" },
    { id: 26, recipe_id: 5, name: "Nori Seaweed Sheets", quantity: "6" },
    { id: 27, recipe_id: 5, name: "Cucumber", quantity: "1" },
    { id: 28, recipe_id: 5, name: "Avocado", quantity: "1" },
    { id: 29, recipe_id: 5, name: "Crab Stick", quantity: "100g" },
    { id: 30, recipe_id: 5, name: "Soy Sauce", quantity: "To taste" },

    // Hamburger
    { id: 31, recipe_id: 6, name: "Ground Beef", quantity: "500g" },
    { id: 32, recipe_id: 6, name: "Hamburger Buns", quantity: "6" },
    { id: 33, recipe_id: 6, name: "Lettuce", quantity: "1 head" },
    { id: 34, recipe_id: 6, name: "Tomatoes", quantity: "2" },
    { id: 35, recipe_id: 6, name: "Onion", quantity: "1" },
    { id: 36, recipe_id: 6, name: "Cheddar Cheese", quantity: "100g" },

    // Chicken Curry
    { id: 37, recipe_id: 7, name: "Chicken Thighs", quantity: "600g" },
    { id: 38, recipe_id: 7, name: "Coconut Milk", quantity: "400ml" },
    { id: 39, recipe_id: 7, name: "Curry Powder", quantity: "2 tbsp" },
    { id: 40, recipe_id: 7, name: "Onion", quantity: "1" },
    { id: 41, recipe_id: 7, name: "Garlic", quantity: "3 cloves" },
    { id: 42, recipe_id: 7, name: "Ginger", quantity: "1 inch" },

    // Caesar Salad
    { id: 43, recipe_id: 8, name: "Romaine Lettuce", quantity: "1 head" },
    { id: 44, recipe_id: 8, name: "Croutons", quantity: "1 cup" },
    { id: 45, recipe_id: 8, name: "Parmesan Cheese", quantity: "50g" },
    { id: 46, recipe_id: 8, name: "Caesar Dressing", quantity: "To taste" },

    // Pasta Primavera
    { id: 47, recipe_id: 9, name: "Pasta", quantity: "200g" },
    {
      id: 48,
      recipe_id: 9,
      name: "Assorted Vegetables (e.g., bell peppers, broccoli, carrots)",
      quantity: "300g",
    },
    { id: 49, recipe_id: 9, name: "Olive Oil", quantity: "2 tbsp" },
    { id: 50, recipe_id: 9, name: "Garlic", quantity: "2 cloves" },
    { id: 51, recipe_id: 9, name: "Parmesan Cheese", quantity: "50g" },

    //Tom Yum Soup
    { id: 52, recipe_id: 10, name: "Prawns", quantity: "200g" },
    { id: 53, recipe_id: 10, name: "Lemongrass", quantity: "2 stalks" },
    { id: 54, recipe_id: 10, name: "Galangal", quantity: "1 inch" },
    { id: 55, recipe_id: 10, name: "Kaffir Lime Leaves", quantity: "3" },
    { id: 56, recipe_id: 10, name: "Thai Chili Peppers", quantity: "2" },
    {
      id: 57,
      recipe_id: 10,
      name: "Mushrooms (e.g., straw mushrooms or button mushrooms)",
      quantity: "100g",
    },
    { id: 58, recipe_id: 10, name: "Tomatoes", quantity: "2" },
    { id: 59, recipe_id: 10, name: "Fish Sauce", quantity: "2 tbsp" },
    { id: 60, recipe_id: 10, name: "Lime Juice", quantity: "2 tbsp" },
    { id: 61, recipe_id: 10, name: "Sugar", quantity: "1 tsp" },
    { id: 62, recipe_id: 10, name: "Cilantro", quantity: "For garnish" },

    // Sushi Nigiri Ingredients
    { id: 63, recipe_id: 11, name: "Sushi Rice", quantity: "2 cups" },
    { id: 64, recipe_id: 11, name: "Nori Seaweed Sheets", quantity: "6" },
    {
      id: 65,
      recipe_id: 11,
      name: "Sashimi-grade Fish (e.g., salmon, tuna)",
      quantity: "200g",
    },
    { id: 66, recipe_id: 11, name: "Wasabi", quantity: "To taste" },
    { id: 67, recipe_id: 11, name: "Soy Sauce", quantity: "For dipping" },
    { id: 68, recipe_id: 11, name: "Pickled Ginger", quantity: "For serving" },
    // Margherita Pizza Ingredients
    {
      id: 69,
      recipe_id: 12,
      name: "Pizza Dough",
      quantity: "1 ball (enough for one pizza)",
    },
    { id: 70, recipe_id: 12, name: "Tomato Sauce", quantity: "1/2 cup" },
    {
      id: 71,
      recipe_id: 12,
      name: "Fresh Mozzarella Cheese",
      quantity: "200g",
    },
    {
      id: 72,
      recipe_id: 12,
      name: "Fresh Basil Leaves",
      quantity: "A handful",
    },
    {
      id: 73,
      recipe_id: 12,
      name: "Extra Virgin Olive Oil",
      quantity: "2 tbsp",
    },
    { id: 74, recipe_id: 12, name: "Salt", quantity: "To taste" },
    { id: 75, recipe_id: 12, name: "Black Pepper", quantity: "To taste" },
  ]);
};
