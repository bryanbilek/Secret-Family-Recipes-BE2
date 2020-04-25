exports.seed = function (knex) {
  return knex('ingredients').insert([
    { recipe_id: 1, ingredient_name: 'Flour', ingredient_amount: '3 cups' },
    { recipe_id: 1, ingredient_name: 'Eggs', ingredient_amount: '2' },
    { recipe_id: 1, ingredient_name: 'Butter', ingredient_amount: '1 stick' },
    { recipe_id: 2, ingredient_name: 'Campbells Chicken Noodle Soup', ingredient_amount: '1 can' },
    { recipe_id: 3, ingredient_name: 'Ground Beef', ingredient_amount: '1 lb' },
    { recipe_id: 3, ingredient_name: 'Buns', ingredient_amount: '8' },
  ]);
};