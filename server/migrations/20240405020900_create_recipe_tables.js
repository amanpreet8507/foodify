exports.up = function (knex) {
  return knex.schema.hasTable("recipes").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("recipes", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("image_url");
        table.string("category").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes");
};
