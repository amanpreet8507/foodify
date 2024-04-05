// imports
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

const PORT = process.env.PORT || 5050;

// Use routes
const ingrediantRoutes = require("./routes/ingrediants-route");
const recipesRoutes = require("./routes/recipes-route");

app.use("/ingrediants", ingrediantRoutes);
app.use("/recipes", recipesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to foodify API");
});
