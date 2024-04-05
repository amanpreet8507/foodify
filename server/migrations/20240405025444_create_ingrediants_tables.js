exports.up = function (knex) {
  return knex.schema.createTable("ingrediants", (table) => {
    table.increments("id").primary();
    table
      .integer("recipe_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("name").notNullable();
    table.string("quantity").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingrediants");
};
